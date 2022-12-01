import React from 'react'

class DemoExample extends React.Component{
	state={
		a:this .props.name,
		b:this.props.rollno
	}
	render(){
		return(
			<div>
				<p>{this.state.a}</p>
				<p>{this.state.b}</p>
				<h1>{this.props.name}</h1>
				<h1>{this.props.rollno}</h1>
			</div>
		)
	}
}
export default DemoExample