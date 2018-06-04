class Story < ApplicationRecord
  belongs_to :user
  has_many :blocks, dependent: :destroy

  include PgSearch
  pg_search_scope :global_search,
    against: [ :title, :description],
    associated_against: {
      blocks: [ :title]
    },
    using: {
      tsearch: { prefix: true }
    }

  validates :title, presence: true, allow_blank: false
end


