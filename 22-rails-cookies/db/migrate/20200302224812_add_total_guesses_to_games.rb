class AddTotalGuessesToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :total_guesses, :integer
  end
end
