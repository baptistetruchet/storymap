class EventZone < ApplicationRecord
  belongs_to :event
  belongs_to :zone
end
