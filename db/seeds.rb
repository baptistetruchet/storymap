# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"
require "yaml"



puts "Cleaning database..."
User.destroy_all
Zone.destroy_all
# Users
puts 'Creating users...'
file = Rails.root.join("db/users.yml")
users = YAML.load(open(file).read)

users["users"].each do |user|
  User.create!(user)
end
puts "#{User.count} users have been created"

# Stories
puts 'Creating country zones...'

require 'csv'

csv_options = { col_sep: ',', quote_char: '"', headers: :first_row }
filepath    = Rails.root.join('db/clean_countries.csv')

CSV.foreach(filepath, csv_options) do |row|
    Zone.create(country: row['admin'], coordinates: row['json_4326'])
end

puts 'Creating story...'

file = Rails.root.join("db/stories.yml")

stories = YAML.load(open(file).read)
stories["stories"].each do |story|

  s = Story.new(story['attributes'])
  s.user = User.first
  s.save!

  if story.key?('blocks')
    story['blocks'].each do |block_details|
      block = Block.new(block_details['attributes'])
      block.story = s
      block.save!

      if block_details.key?('events')
        block_details['events'].each do |event_details|
          event = Event.new(event_details['attributes'])
          event.block = block
          event.save!

          # if event_details.key?('eventzones')
          #   event_details['eventzones'].each do |eventzone_details|
          #     eventzone = EventZone.new(eventzone_details['attributes'])
          #     eventzone.event = event
          #     eventzone.save!
          #   end
          # end
        end
      end
    end
  end
end
puts "#{Story.count} stories have been created"

# # Blocks
# puts 'Creating Blocks...'
# file = "db/stories.yml"
# stories = YAML.load(open(file).read)

# stories["stories"].each do |story|

# end
# puts "#{Event.count} events have been created"
