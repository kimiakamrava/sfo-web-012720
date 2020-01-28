accounts = [
  {balance: 123, customer_id: 6}, 
  {balance: 1234, customer_id: 7}
]

def get_balance(customer_id, accounts)
  account = accounts.select do |account|
    account[:customer_id] == customer_id
  end.first
  account[:balance]
end

puts get_balance(7, accounts)
