class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.references :doctor, index: true
      t.references :patient, index: true
      t.string :date_time
    end
  end
end
