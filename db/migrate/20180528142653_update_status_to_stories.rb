class UpdateStatusToStories < ActiveRecord::Migration[5.2]
  def change
    remove_column :stories, :status, :string
    add_column :stories, :published, :boolean, default: false
  end
end
