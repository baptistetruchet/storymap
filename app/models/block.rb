class Block < ApplicationRecord
  belongs_to :story
  has_many :events
end
