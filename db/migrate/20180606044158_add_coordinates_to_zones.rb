class AddCoordinatesToZones < ActiveRecord::Migration[5.2]
  def change
    add_column :zones, :coordinates, :string
  end
end
