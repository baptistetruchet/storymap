class Block < ApplicationRecord
  belongs_to :story

  has_many :events, dependent: :destroy

  validates :title, presence: true, allow_blank: false
  validates :position, presence: true, numericality: { :greater_than_or_equal_to => 1 }
end
