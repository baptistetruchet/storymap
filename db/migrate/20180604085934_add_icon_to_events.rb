class AddIconToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :icon, :string
  end
end
