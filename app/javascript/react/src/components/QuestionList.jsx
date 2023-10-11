import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDom from 'react-dom'
import QuestionDetail from './QuestionDetail'
import EmptyQuestionMessage from './EmptyQuestionMessage'
import Loader from './Loader'
import NewQuestion from './NewQuestion'

const QuestionList = () => {
	const questionsTags = [
      { label: 'Ruby', value: 0 },
      { label: 'Rails', value: 1 },
      { label: 'JavaScript', value: 2 },
      { label: 'Typescript', value: 3 },
      { label: 'React', value: 4 }
	]
	const [questionsList, setQuestionsList] = useState([])
	const [selectedOption, setSelectedOption] = useState(questionsTags[0].value)
	const [isShowAlert, SetIsShowAlert] = useState(false)
	const [isShowLoader, SetIsShowLoader] = useState(true)

	const questionsUrl = 'http://localhost:3000/api/v1/questions'

	const fetchQuestionList = () => {
	  SetIsShowLoader(false)	
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
    	SetIsShowLoader(false)
    	SetIsShowAlert(false)
    	setQuestionsList([])
    	setSelectedOption(event.target.value)
    	fetch(questionsUrl + `?skill=${questionsTags[event.target.value].label}
    	`)
    	.then((response) => response.json())
    	.then((data) => {
    		console.log(data)
    		setQuestionsList(data)
    		if(data.length == 0) {
    	      SetIsShowAlert(true)
    	      SetIsShowLoader(true)
    		}
    	})
    }
	
	return (
		<div className="row">
			<div className="col-lg-10 mx-auto">
			 <p className="lead fw-bold">Filter Questions by Answers</p>
			<button type="button" className="btn btn-primary mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Contribute Your Question
            </button>
			 <select className="form-select form-select-lg" value={selectedOption}
			  onChange={event => updateSelectedItem(event)}>
			 {questionsTags.map(tag=>(
			 	<option key={tag.value} value={tag.value}>{tag.label}</option>
			 	))}
			 </select>	
			 {  questionsList.length > 0 ?
			     questionsList.map((question) =>  
			 	<QuestionDetail question={question} key={question.id} />	
			    ) : <Loader isShowLoader={isShowLoader} />
		     }
		     { isShowAlert && <EmptyQuestionMessage tagname={questionsTags[selectedOption].label}/>}
			</div>
			<NewQuestion />		
	   </div>	
	)

}

export default QuestionList