class AddColorToEventZones < ActiveRecord::Migration[5.2]
  def change
    add_column :event_zones, :color, :string
  end
end
