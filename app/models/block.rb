class Block < ApplicationRecord
  belongs_to :story

  has_many :events, dependent: :destroy

  validates :title, presence: true, allow_blank: false, length: { maximum: 15,
    too_long: "Sorry, your title needs to have a maximum of %{count} characters" }
  validates :position, presence: true, numericality: { :greater_than_or_equal_to => 1 }
end
