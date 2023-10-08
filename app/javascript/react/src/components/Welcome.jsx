import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import QuestionList from './QuestionList'
 
class Welcome extends React.Component {
	render() {
		return(
		<div className="container"> 
		     <h1> My first react application</h1>
		     <QuestionList />
		</div>
	)
	}
	

}

const root = ReactDom.createRoot(document.getElementById('welcome'))
root.render(
	<React.StrictMode>
      <Welcome />
    </React.StrictMode>
)

export default Welcome