class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.references :user, foreign_key: true
      t.string :title
      t.string :status
      t.text :description

      t.timestamps
    end
  end
end
