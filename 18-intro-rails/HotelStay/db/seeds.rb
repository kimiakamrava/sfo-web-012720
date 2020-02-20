# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



10.times do
  name = Faker::GreekPhilosophers.name + "Hotel"
  occupancy = rand(40..400)
  location = Faker::Address.full_address
  open = [true, false].sample

  Hotel.create(
    name: name,
    occupancy: occupancy,
    location: location,
    open: open
  )
end