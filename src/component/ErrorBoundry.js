import React, { Component } from "react";

class ErrorBoundry extends Component {
	constructor(props){
		super(props);
		this.state = {
			haserror: false
		}
	}
	componentDidCatch(error, info) {
		this.setState({HasError: true})
	}
	
	render () {
		if (this.state.HasError) {
			return <h1 className="f1"> Ooops. Something is not right </h1>
		}
		return this.props.children
	}
}

export default ErrorBoundry;