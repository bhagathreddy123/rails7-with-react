class Question < ApplicationRecord
	validates :title, presence: true, uniqueness: true
	# validates :ans, presence: true
end
