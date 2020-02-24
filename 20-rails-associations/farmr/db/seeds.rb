# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cow.destroy_all
Farmer.destroy_all

ed = Farmer.create!(name: 'Edward')
eustace = Farmer.create!(name: 'Eustace')
macdonald = Farmer.create!(name: 'MacDonald')
john = Farmer.create!(name: 'John')

cow1 = Cow.create!(name: 'Butters', spots: 20, farmer: ed)
cow2 = Cow.create!(name: 'Cheese', spots: 200, farmer: ed)
cow3 = Cow.create!(name: 'Hide', spots: 2, farmer: eustace)
