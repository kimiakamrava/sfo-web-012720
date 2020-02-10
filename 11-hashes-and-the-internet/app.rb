require 'rest-client'
require 'pry'
require 'json'

puts
puts "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
puts "} Welcome to the BookWorm CLI! {"
puts "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
puts
puts "Enter a title or subject for books in which you're interested!"
user_input = gets.chomp

response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{user_input}")
response_hash = JSON.parse(response.body)
books = response_hash["items"].map{ |item| item["volumeInfo"] }

def process_books_hash(raw_books_array)
    raw_books_array.map do |book|
        {
            :title => book["title"],
            :authors => book["authors"].join(", "),
            :description => book["description"]
        }
    end
end

nicer_books = process_books_hash(books)
octothorpe_wall = "#" * 79

nicer_books.each do |book|
    puts octothorpe_wall
    puts
    puts "#{book[:title]} by #{book[:authors]}"
    puts "*-" * 39 + "*"
    puts book[:description]
    puts
end

puts octothorpe_wall

# binding.pry

# puts "I love APIs!~!!"
