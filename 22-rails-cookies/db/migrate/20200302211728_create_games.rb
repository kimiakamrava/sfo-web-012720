class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.boolean :won
      t.integer :user_id
      t.string :word

      t.timestamps
    end
  end
end
