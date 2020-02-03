require 'benchmark'

array = (1..100000).to_a

puts Benchmark.measure {
  100.times do
    array.map { |el| el.even? }
  end
}

puts Benchmark.measure {
  100.times do
    new_array = []
    array.each do |el| 
      new_array << el.even? 
    end
  end
}

# puts Benchmark.measure {
#   100.times do
#     array.select { |el| el.even? }
#   end
# }

# puts Benchmark.measure {
#   100.times do
#     new_array = []
#     array.each do |el| 
#       if el.even? 
#          new_array << el
#       end
#     end
#   end
# }
