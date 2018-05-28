class Story < ApplicationRecord
  belongs_to :user
  has_many :blocks, dependent: :destroy

  validates :title, presence: true, allow_blank: false
  validates :status, presence: true, allow_blank: false
end
