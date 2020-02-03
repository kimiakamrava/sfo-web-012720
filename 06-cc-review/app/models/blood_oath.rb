class BloodOath
  attr_accessor :initiation_date, :cult, :follower

  @@all = []

  # BloodOath.all
  # returns an Array of all the blood oaths
  def self.all
    @@all
  end

  def initialize(initiation_date, cult, follower)
    @initiation_date = initiation_date
    @cult = cult
    @follower = follower
    @@all << self
  end

  # BloodOath#initiation_date
  # returns a String that is the initiation date of this blood oath in the format YYYY-MM-DD.
  
  # BloodOath.first_oath
  # returns the Follower instance for the follower that made the very first blood oath
end
