class Die

  def initialize
    @faces = 6
  end

  def roll
    rand(1..@faces)
  end
end
