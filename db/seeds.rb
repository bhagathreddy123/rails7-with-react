# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Question.create([

    { 
		title: "What is React?",
		ans: "open-source front-end JavaScript library"
	},

	{ 
		title: "What are the major features of React?",
		ans: "JSX syntax"
	},

	{ 
		title: "Why is DevTools not loading in Chrome for local files?",
		ans: "open Chrome Extensions and check Allow access to file URLs"
	},

	{ 
		title: "What is the difference between Element and Component?",
		ans: "component can be declared in several different way"
	},

	{ 
		title: "What are the advantages of React over Vue.js?",
		ans: "Gives more flexibility in large apps developing"
	}
])

