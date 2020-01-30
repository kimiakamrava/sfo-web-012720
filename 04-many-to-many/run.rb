require 'pry' 
require 'faker'
require_relative './recipe.rb'
require_relative './ingredient.rb'
require_relative './recipe_ingredient.rb'

5.times do
  recipe_name = Faker::Food.dish
  serving_size = rand(1..12)
  Recipe.new(recipe_name, serving_size)
end

types = ["solid", "liquid"]

20.times do
  ingredient_name = Faker::Food.ingredient 
  type = types.sample
  ingredient = Ingredient.new(ingredient_name, type)
  recipe = Recipe.all.sample
  amount = Faker::Food.measurement
  RecipeIngredient.new(recipe, ingredient, amount)
end

binding.pry

puts "sup fam!"
