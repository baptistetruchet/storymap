class Block < ApplicationRecord
  belongs_to :story
  has_many :events, dependent: :destroy
end
