import * as React from 'react'
import * as ReactDom from 'react-dom'
import QuestionList from './QuestionList'
 
const Welcome = () => {
	return(
		<div className="container"> 
		     <h1> My first react application</h1>
		     <QuestionList />
		</div>
	)

}

document.addEventListener('DOMContentLoaded', () => {
	ReactDom.render(<Welcome />, document.getElementById('welcome'))
})

export default Welcome