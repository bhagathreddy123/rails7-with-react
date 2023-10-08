import * as React from 'react'
import * as ReactDom from 'react-dom'
import QuestionDetail from './QuestionDetail'
 
const QuestionList = () => {
	const questionsList = [
	{ 
		id: 1,
		title: "What is React?",
		ans: "open-source front-end JavaScript library"
	},
	{ 
		id: 2,
		title: "What are the major features of React?",
		ans: "JSX syntax"
	},
	{ 
		id: 3,
		title: "Why is DevTools not loading in Chrome for local files?",
		ans: "open Chrome Extensions and check Allow access to file URLs"
	},
	{ 
		id: 4,
		title: "Why is DevTools not loading in Chrome for local files?",
		ans: "open Chrome Extensions and check Allow access to file URLs"
	},
	{ 
		id: 5,
		title: "What are the advantages of React over Vue.js?",
		ans: "Gives more flexibility in large apps developing"
	}

	]

	return (
		<div className="row">
			<div className="col-lg-10 mx-auto">
			 {questionsList.map((question) =>  
			 	< QuestionDetail question={question} key={question.id} />	
			)}
			</div>		
		</div>	
		)

}

export default QuestionList