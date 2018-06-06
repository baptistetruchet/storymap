class Event < ApplicationRecord
  belongs_to :block
  has_many :event_zones, dependent: :destroy
  accepts_nested_attributes_for :event_zones, reject_if: :all_blank, allow_destroy: true

  has_many :zones, through: :event_zones


  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?

  validates :title, presence: true, allow_blank: false
  validates :date, presence: true, allow_blank: false
  validates :address, presence: true, allow_blank: false
end
