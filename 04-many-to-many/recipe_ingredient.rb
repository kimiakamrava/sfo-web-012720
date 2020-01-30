class RecipeIngredient
  attr_accessor :recipe, :ingredient, :amount

  @@all = []

  def self.all
    @@all
  end

  def initialize(recipe, ingredient, amount)
    @recipe = recipe
    @ingredient = ingredient
    @amount = amount
    @@all << self
  end

end
