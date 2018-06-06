class RemoveColumnsFromZones < ActiveRecord::Migration[5.2]
  def change
    remove_column :zones, :title
    remove_column :zones, :color
  end
end
