import React, { Component } from 'react';

class InputComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.combinedFunction = this.combinedFunction.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value !== '') {
      console.log('Exists');
    } else {
      console.log('Blank');
    }
  }

	combinedFunction(event) {
		this.handleSubmit(event);
		this.props.something(this.state.value);
	}

	render() {
		return (
			<form>
      	<input type='text' placeholder='Enter Items Here' value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.combinedFunction}>Add</button>
      </form>
		);
	}
}

export default InputComponent;
