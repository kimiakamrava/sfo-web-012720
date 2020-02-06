class AddAtomicNumberToElement < ActiveRecord::Migration[5.2]
  def change
    add_column :elements, :atomic_number, :integer
  end
end
