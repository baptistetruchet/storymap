class CreateBlocks < ActiveRecord::Migration[5.2]
  def change
    create_table :blocks do |t|
      t.references :story, foreign_key: true
      t.string :title
      t.integer :position

      t.timestamps
    end
  end
end
