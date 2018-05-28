class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.references :block, foreign_key: true
      t.string :title
      t.text :content
      t.date :date
      t.string :address

      t.timestamps
    end
  end
end
