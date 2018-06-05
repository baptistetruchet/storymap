class CreateEventZones < ActiveRecord::Migration[5.2]
  def change
    create_table :event_zones do |t|
      t.references :event, foreign_key: true
      t.references :zone, foreign_key: true

      t.timestamps
    end
  end
end
