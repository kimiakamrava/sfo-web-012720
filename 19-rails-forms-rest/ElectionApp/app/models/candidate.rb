class Candidate < ApplicationRecord

  def self.parties
    Candidate.all.map{ |can| can.party }.uniq
  end
end
