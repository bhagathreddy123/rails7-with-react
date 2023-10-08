import * as React from 'react'
import * as ReactDom from 'react-dom'

const QuestionDetail = (props) => {
	return(

        <div className="card rounded-0 mt-3">
	        <h3 className="card-tile">{props.question.title}</h3>
	        <p className="lead">
	          <span className="badge bg-primary">{props.question.ans}</span>
	        </p>
	    </div>
	)

}


export default QuestionDetail