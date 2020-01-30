class Ingredient
  attr_accessor :name, :type

  @@all = []

  def self.all
    @@all
  end

  def initialize(name, type)
    @name = name
    @type = type
    @@all << self
  end

  def recipe_ingredients
    RecipeIngredient.all.select do |recipe_ingredient|
      recipe_ingredient.ingredient == self
    end
  end

  def recipes
    recipe_ingredients.map do |recipe_ingredient|
      recipe_ingredient.recipe
    end
  end
end
