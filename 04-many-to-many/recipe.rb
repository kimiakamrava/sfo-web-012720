class Recipe
  attr_accessor :name, :serves

  @@all = []

  def self.all
    @@all
  end

  def initialize(name, serves)
    @name = name
    @serves = serves
    @@all << self
  end

  def recipe_ingredients
    RecipeIngredient.all.select do |recipe_ingredient|
      recipe_ingredient.recipe == self
    end
  end

  def ingredients
    recipe_ingredients.map do |recipe_ingredient|
      recipe_ingredient.ingredient 
    end
  end

  def add_ingredient(ingredient, amount="1 smidgen")
    RecipeIngredient.new(self, ingredient, amount)
  end
end
