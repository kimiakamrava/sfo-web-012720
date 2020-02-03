class Follower
  attr_accessor :name, :age, :life_motto

  @@all = []

  # Follower.all
  # returns an Array of all the followers
  def self.all
    @@all
  end

  def initialize(attr_hash)
    @name = attr_hash[:name]
    @age = attr_hash[:age]
    @life_motto = attr_hash[:life_motto]
    @@all << self
  end


# Follower#cults
# returns an Array of this follower's cults

# Follower#join_cult
# takes in an argument of a Cult instance and adds this follower to the cult's list of followers

# Follower.of_a_certain_age
# takes an Integer argument that is an age and returns an Array of followers who are the given age or older

# Follower#my_cults_slogans
# prints out all of the slogans for this follower's cults
# Follower.most_active
# returns the Follower instance who has joined the most cults
# Follower.top_ten
# returns an Array of followers; they are the ten most active followers
end
