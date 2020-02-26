class Shop < ApplicationRecord
  has_many :bagels, dependent: :destroy
end
