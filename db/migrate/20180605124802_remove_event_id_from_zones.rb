class RemoveEventIdFromZones < ActiveRecord::Migration[5.2]
  def change
    remove_column :zones, :event_id
  end
end
