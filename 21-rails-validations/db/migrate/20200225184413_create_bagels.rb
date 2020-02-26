class CreateBagels < ActiveRecord::Migration[6.0]
  def change
    create_table :bagels do |t|
      t.float :price
      t.boolean :tasty
      t.string :name
      t.references :shop, null: false, foreign_key: true

      t.timestamps
    end
  end
end
