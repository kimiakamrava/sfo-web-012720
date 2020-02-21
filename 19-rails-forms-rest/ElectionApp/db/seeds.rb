# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

parties = ['Democratic', 'Republican', 'Green', 'Libertarian', 'Independent', 'Monarchist', 'Hivemind']

10.times do
  Candidate.create(name: Faker::Name.name, party: parties.sample)
end
