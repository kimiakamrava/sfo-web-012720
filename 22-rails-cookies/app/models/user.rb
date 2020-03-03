class User < ApplicationRecord
  has_many :games
  validates :username, {uniqueness: true, presence: true}
end
