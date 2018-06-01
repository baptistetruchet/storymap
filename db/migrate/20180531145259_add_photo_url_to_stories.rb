class AddPhotoUrlToStories < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :photo_url, :string
  end
end
