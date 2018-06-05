class AddColorToZones < ActiveRecord::Migration[5.2]
  def change
    add_column :zones, :color, :string
    add_column :zones, :country, :string
  end
end
