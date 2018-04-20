import React, { Component } from 'react';
import ListIterator from './ListIterator';
import FormComponent from './FormComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
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

  handleUserInput(valueOfUserInput) {
    let duplicateInput = false;
    let items = [...this.state.items];
    items.forEach(item => {
      if (Object.values(item).indexOf(valueOfUserInput) > -1) {
        duplicateInput = true;
      }
    });
    if (!duplicateInput) {
      items.push({
        key: new Date().valueOf(),
        text: valueOfUserInput
      });
      this.setState({
        items
      });
    } else {
      alert('Duplicate Input');
    }
  }

  render() {
    return (
      <div className='app'>
        <FormComponent validateUserInput={this.handleUserInput} />
        <ListIterator listItems={this.state.items} deleteItem={this.handleDelete} />
      </div>
    );
  }
}

export default App;
