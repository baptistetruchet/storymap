class Event < ApplicationRecord
  belongs_to :block

  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?

  validates :title, presence: true, allow_blank: false
  validates :date, presence: true, allow_blank: false
  validates :location, presence: true, allow_blank: false
end
