class Tweet
  # Setter and getter macros
  attr_accessor :message
  attr_reader :id, :username

  # Class variable(s)
  @@tweets = []

  # Initialize a Tweet instance with a message and username,
  # save to the DB, and set the id of the instance based on the table key.
  def initialize(props = {})
    @message = props['message']
    @username = props['username']
    @id = props['id']
    if !in_db?
      save
      set_instance_id
    end
    @@tweets << self
  end

  # Put the C in CRUD with #save
  # tweet = Tweet.new({'username' => 'coffee_dad', 'message' => 'coffee'})
  def save
    sql = <<-SQL
      INSERT INTO tweets (message, username)
      VALUES (? , ?);
    SQL

    DB[:conn].execute(sql, @message, @username)
  end

  # Helper method to detect existing tweet
  def in_db?
    sql = <<-SQL
      SELECT * FROM tweets
      WHERE message == ? AND username == ?;
    SQL

    results = DB[:conn].execute(sql, @message, @username)

    results == [] ? false : true
  end

  # Return the key of the last instance of the tweets DB table
  def set_instance_id
    sql = <<-SQL
      SELECT id FROM tweets
      ORDER BY id DESC
      LIMIT 1;
    SQL

    results = DB[:conn].execute(sql)

    @id = results.first['id']
  end

  # Put the R in CRUD with .all!
  # Return an array of all Tweet instances
  def self.all
    sql = <<-SQL
      SELECT * FROM tweets;
    SQL

    results = DB[:conn].execute(sql)

    @@tweets = results.map do |result|
      Tweet.new(result)
    end
  end

  # Put the R in CRUD with .find_by
  

  # Put the U in CRUD with #update
  

  # Put the D in CRUD with .delete_all
  
end
