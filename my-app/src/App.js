import React, { Component } from 'react';
import ListIterator from './ListIterator';
import InputComponent from './InputComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSomeInput = this.handleSomeInput.bind(this);
    this.inputValueSetter = this.inputValueSetter.bind(this);
  }

  handleSomeInput() {
    let items = [...this.state.items];
    if (this.state.value !== '') {
      items.push({
        key: new Date().valueOf(),
        text: this.state.value
      });
      this.setState({
        items,
        value: ''
      });
    }
  }

  handleDelete(elementToBeDeleted) {
    let items = this.state.items.filter(item => {
      if (item.key !== elementToBeDeleted) {
        return item;
      }
      return null;
    });
    this.setState({
      items
    });
  }

  inputValueSetter(somethingElse) {
    this.setState({
      value: somethingElse
    });
  }

  render() {
    return (
      <div className='app'>
        <InputComponent something={this.inputValueSetter} />
        <ListIterator listItems={this.state.items} deleteItem={this.handleDelete} />
      </div>
    );
  }
}

export default App;
