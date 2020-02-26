class Bagel < ApplicationRecord
  belongs_to :shop

  validates(:name, { presence: true, uniqueness: true })
  # validates :price, numericality: { presence: true, only_integer: true }
  #more commonly, the () are omitted
  validate(:validate_num_for_price)

  def validate_num_for_price
    self.price = self.price.to_i
    if self.price.class != Float || self.price > 30
      # errors array -> [{price: "Needs to be a number less than 30"}]
      self.errors.add(:price, "Needs to be a number less than 30")
    end
  end
end
