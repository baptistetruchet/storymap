class Event < ApplicationRecord
  belongs_to :block

  validates :title, presence: true, allow_blank: false
  validates :date, presence: true, allow_blank: false
  validates :location, presence: true, allow_blank: false
end
