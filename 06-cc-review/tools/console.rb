require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console
mansonites = Cult.new("Charles Manson", "California", 1972, "Beards.")
rubyists = Cult.new("Rubyists", "California", 2020, "That's good. We're here, right?")
scientology = Cult.new("Scientology", "California", 1956, "We're just plain old fashioned crazy.")

follower_hash_a = {name: "Ted", age: 14, life_motto: "Whatever man"}
follower_hash_b = {name: "Christine", age: 41, life_motto: "This time it's for real"}
follower_hash_c = {name: "Jeeves", age: 26, life_motto: "Couldn't hurt."}
Follower.new(follower_hash_a)
Follower.new(follower_hash_b)

5.times do
  cult = Cult.all.sample
  follower = Follower.all.sample
  BloodOath.new("1999-08-07", cult, follower)
end

binding.pry

puts "Mwahahaha!" # just in case pry is buggy and exits
