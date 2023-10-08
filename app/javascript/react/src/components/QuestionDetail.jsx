import * as React from 'react'
import * as ReactDom from 'react-dom'

class QuestionDetail extends React.Component {
	constructor(props){
		super(props)
		this.state = { likeCount: 0 }

		this.updateLikeCounter = this.updateLikeCounter.bind(this)
	}

	updateLikeCounter() {
		this.setState(function(state) {
			return {
				likeCount: state.likeCount + 1
			}
		})
	}
	render() {
		return(

        <div className="card rounded-0 mt-3">
	        <h3 className="card-tile">{this.props.question.title}</h3>
	        <p className="lead">
	          <span className="badge bg-primary">{this.props.question.ans}</span>
	        </p>
	        <button className="btn btn-primary mt-1" onClick={ this.updateLikeCounter }>Like</button>
	       { this.state.likeCount > 0 ?
             <span className="badge bg-primary mt-1">{this.state.likeCount} </span> : ''
	       }
	    </div>
	)
	}
}


export default QuestionDetail