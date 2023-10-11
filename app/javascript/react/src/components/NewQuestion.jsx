import * as React from 'react'
import {useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'

const NewQuestion = () => {
	const questionsTags = [
      { label: 'Ruby', value: 0 },
      { label: 'Rails', value: 1 },
      { label: 'JavaScript', value: 2 },
      { label: 'Typescript', value: 3 },
      { label: 'React', value: 4 }
	]

	const [title, setTitle] = useState('')
	const [tag, setTag] = useState(questionsTags[0].value)

	const handleTitleChange = (event) => {
		setTitle(event.target.value)
	}

	const handleTagChange = (event) => {
		setTag(event.target.value)
	}

	const handleQuestionSubmit = (event) => {
      event.preventDefault();
      console.log({title: title, tag: tag})
    }

	return(
		<div className="modal fade" id="exampleModal" tabIndex="-1" 
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog modal-lg">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h1 className="modal-title fs-5" id="exampleModalLabel">Write Your Question ad help the world to grow</h1>
		        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		        <form onSubmit={handleQuestionSubmit}>
			      <div className="modal-body">
			        <div className="form-group">
			           <label className="form-label mt-3 mb-3"> Title</label>
			           <input type="text" className="form-control form-control-lg rounded-0" value={title}
			            onChange={event => handleTitleChange(event)} name="title" />
			        </div>
			        <div className="form-group">
			           <label className="form-label mt-3 mb-3"> Question Tag</label>
			           <select className="form-select form-slect-lg rounded-0" value={tag} onChange={ event => handleTagChange(event}} name="tag">
			           	{ questionsTags.map(tag => (
			           		<option key={tag.value} value={tag.value}>{tag.label}</option>
			           		))}
			           </select>
			        </div>
			      </div>
			      <div className="modal-footer">
		           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		           <button type="submit" className="btn btn-primary">Submit Question</button>
		         </div>
			   </form>		      
		    </div>
		  </div>
        </div>
	)

}

export default NewQuestion