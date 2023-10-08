import * as React from 'react'
import * as ReactDom from 'react-dom'

class QuestionDetail extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		  likeCount: 0,
		  dislikeCount: 0 
		}
		

		this.updateLikeCounter = this.updateLikeCounter.bind(this)
		this.updateDisLikeCounter = this.updateDisLikeCounter.bind(this)
	}

	updateLikeCounter() {
		this.setState(function(state) {
			return {
				likeCount: state.likeCount + 1
			}
		})
	}

	updateDisLikeCounter() {
		this.setState(function(state) {
			return {
				dislikeCount: state.dislikeCount + 1
			}
		})
	}


	render() {
		return(
        <div className="card rounded-0 mt-3">
          <div className="card-body">
	        <h3 className="card-tile">{this.props.question.title}</h3>
	        <p className="lead">
	          <span className="badge bg-primary">{this.props.question.ans}</span>
	        </p>
	        <button type="button" className="btn btn-primary position-relative"  onClick={ this.updateLikeCounter }  style={{marginRight: 1+'em'}} >
  				Like
  				 { this.state.likeCount > 0 ?
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{this.state.likeCount} </span> : ''
	       }
			</button>

			<button type="button" className="btn btn-primary position-relative"  onClick={ this.updateDisLikeCounter }>
  				DisLike
  				 { this.state.dislikeCount > 0 ?
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{this.state.dislikeCount} </span> : ''
	       }
			</button>
	      </div>
	    </div>
	)
	}
}


export default QuestionDetail