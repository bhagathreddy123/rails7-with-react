class AddSkillInQuestions < ActiveRecord::Migration[7.0]
  def change
    add_column :questions, :skill, :string
  end
end
