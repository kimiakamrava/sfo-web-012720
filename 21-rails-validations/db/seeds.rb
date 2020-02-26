# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bagel.destroy_all
Shop.destroy_all

beauty = Shop.create!(name: "Beauty's Bagel Shop", city: 'San Francisco')
oasis = Shop.create!(name: "Bagel Oasis and Terrace Bagels", city: 'New York')
eltana = Shop.create!(name: "Eltana Wood-Fired Bagel Cafe", city: 'Seattle')

Bagel.create!(name: "Hummus", price: 7.50, tasty: true, shop: beauty)
Bagel.create!(name: "Smoked Turkey", price: 9.00, tasty: true, shop: beauty)
Bagel.create!(name: "Tuna Melt", price: 9.50, tasty: false, shop: beauty)

Bagel.create!(name: "Pretzel", price: 1.75, tasty: false, shop: oasis)
Bagel.create!(name: "Flagel", price: 1.50, tasty: false, shop: oasis)
Bagel.create!(name: "Baked Salmon Spread", price: 7.00, tasty: true, shop: oasis)

Bagel.create!(name: "Almond Butter Bagel", price: 5.25, tasty: true, shop: eltana)
Bagel.create!(name: "Olive & Herb Cream Cheese", price: 4.75, tasty: false, shop: eltana)
Bagel.create!(name: "Spicy Garlic Cream Cheese", price: 4.50, tasty: true, shop: eltana)


