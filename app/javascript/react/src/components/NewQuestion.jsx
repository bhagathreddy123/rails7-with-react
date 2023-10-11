import * as React from 'react'
import {useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'

const NewQuestion = () => {
	const questionsTags = [
      { label: 'Ruby', value: 'Ruby' },
      { label: 'Rails', value: "Rails" },
      { label: 'JavaScript', value: "JavaScript" },
      { label: 'Typescript', value: "Typescript" },
      { label: 'React', value: "React" }
	]

	const [formField, setFormField] = useState({
		title: ''
		tag: questionsTags[0].value
	})

	const handleQuestionSubmit = (event) => {
      event.preventDefault();
      console.log(formField)
    }

    const handleFormFields = (event) => {
      setFormField({ ...formField, [event.target.name]: event.target.value})
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
			            onChange={event => handleFormFields(event)} name="title" />
			        </div>
			        <div className="form-group">
			           <label className="form-label mt-3 mb-3"> Question Tag</label>
			           <select className="form-select form-slect-lg rounded-0" value={tag} onChange={ event => handleFormFields(event}} name="tag">
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