class Cult
  attr_accessor :name, :location, :founding_year, :slogan

  @@all = []

  # returns an Array of all the cults
  def self.all
    @@all
  end

  def initialize(name, location, founding_year, slogan)
    @name = name
    @location = location
    @founding_year = founding_year
    @slogan = slogan
    @@all << self
  end

  # Cult#recruit_follower
  # takes in an argument of a Follower instance and adds them to this cult's list of followers
  def recruit_follower(follower)
    BloodOath.new("2020-02-03", self, follower)
  end

  # Cult#cult_population
  # returns an Integer that is the number of followers in this cult
  def cult_population
    all_blood_oaths = BloodOath.all.select{ |blood_oath| blood_oath.cult == self }
    all_blood_oaths.size
  end

  # Cult.find_by_name
  # takes a String argument that is a name and returns a Cult instance whose name matches that argument
  def self.find_by_name(name)
    self.all.select{ |cult| cult.name == name }
  end
  
  # Cult.find_by_location
  # takes a String argument that is a location and returns an Array of cults that are in that location
  
  # Cult.find_by_founding_year
  # takes an Integer argument that is a year and returns all of the cults founded in that year

  # Cult#average_age
  # returns a Float that is the average age of this cult's followers

  # Cult#my_followers_mottos
  # prints out all of the mottos for this cult's followers

  # Cult.least_popular
  # returns the Cult instance who has the least number of followers 😦
  def self.least_popular
    self.all.min_by{ |a| a.cult_population }
  end

  # Cult.most_common_location
  # returns a String that is the location with the most cults

end