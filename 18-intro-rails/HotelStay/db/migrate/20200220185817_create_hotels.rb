class CreateHotels < ActiveRecord::Migration[6.0]
  def change
    create_table :hotels do |t|
      t.string :name
      t.integer :occupancy
      t.string :location
      t.boolean :open
      t.references :guest, index: true

      t.timestamps
    end
  end
end
