require 'pry'

require_relative 'die'
require_relative 'dtwenty'
require_relative 'coin'

d_six = Die.new
d_twenty = DTwenty.new
coin = Coin.new

binding.pry
puts "Take a chance!"
