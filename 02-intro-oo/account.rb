require 'pry'
# Pascal case for class names
# scope is where variables/methods are accessible/visible
class BankAccount
    attr_accessor :balance
    attr_reader :account_number, :customer_id

    @@all = []

    def self.all
        @@all
    end

    def initialize(account_number, balance, customer_id)
        @account_number = account_number
        @balance = balance
        @customer_id = customer_id
        @@all << self
    end

    def deposit(amount)
        puts self
        @balance += amount
    end

    def withdraw(amount)
        if amount > @balance
            difference = amount - @balance
            @balance = 0
            puts "Sorry, incomplete withdraw. You are $#{difference} short."
        else
            @balance -= amount
        end
    end
end

new_account = BankAccount.new(123, 9, 194)

binding.pry

puts "Hi dad!"
