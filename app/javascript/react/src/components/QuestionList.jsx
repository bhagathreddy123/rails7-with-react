import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDom from 'react-dom'
import QuestionDetail from './QuestionDetail'
import EmptyQuestionMessage from './EmptyQuestionMessage'
 
const QuestionList = () => {
	const questionsTags = [
      { label: 'All', value: 0 },
      { label: 'Ruby', value: 1 },
      { label: 'Rails', value: 2 },
      { label: 'JavaScript', value: 3 },
      { label: 'Typescript', value: 4 },
      { label: 'React', value: 5 }
	]

	const [questionsList, setQuestionsList] = useState([])
	const [selectedOption, setSelectedOption] = useState(questionsTags[0].value)
	const [isShowAlert, SetIsShowAlert] = useState(false)

	const questionsUrl = 'http://localhost:3000/api/v1/questions'

	const fetchQuestionList = () => {
      fetch(questionsUrl)
       .then((response) => response.json())
       .then((data) => {
       	 console.log(data)
       	 setQuestionsList(data)
       	if(data.length == 0){
    	  SetIsShowAlert(true)
    	 } else {
    	 SetIsShowAlert(false)
    	}
       })
	}

	useEffect(() => {
		fetchQuestionList()
	}, [])
    
    const updateSelectedItem = (event) => {
    	setQuestionsList([])
    	setSelectedOption(event.target.value)
    	fetch(questionsUrl + `?skill=${questionsTags[event.target.value].label}
    	`)
    	.then((response) => response.json())
    	.then((data) => {
    		console.log(data)
    		setQuestionsList(data)
    		if(data.length == 0){
    	    	SetIsShowAlert(true)
    		} else {
    			SetIsShowAlert(false)
    		}
    	})
    }
	
	return (
		<div className="row">
			<div className="col-lg-10 mx-auto">
			 <p className="lead fw-bold">Filter Questions by Answers</p>
			 <select className="form-select form-select-lg" value={selectedOption}
			  onChange={event => updateSelectedItem(event)}>
			 {questionsTags.map(tag=>(
			 	<option key={tag.value} value={tag.value}>{tag.label}</option>
			 	))}
			 </select>	
			 {  questionsList.length > 0 ?
			     questionsList.map((question) =>  
			 	<QuestionDetail question={question} key={question.id} />	
			    ) : ''
		     }
		     { isShowAlert && <EmptyQuestionMessage tagname={questionsTags[selectedOption].label}/>}
			</div>		
	   </div>	
	)

}

export default QuestionList