import React, { Component } from 'react';
import ListIterator from './ListIterator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.userInput = React.createRef();
  }

  handleSubmit = event => {
    let userInputElement = this.userInput.current;
    let currentUserInput = userInputElement.value;
    let items = [...this.state.items];
    event.preventDefault();
    if (currentUserInput !== '') {
      if (items.indexOf(currentUserInput) > -1) {
        alert('Duplicate Input');
      } else {
        items.push({
          key: new Date().valueOf(),
          text: currentUserInput
        });
        this.setState({
          items
        }, () => userInputElement.value = '');
      }
    } else {
      alert('Enter something Jackass');
    }
  }

  handleDelete = elementToBeDeleted => {
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

  render() {
    return (
      <div className='app'>
        <form>
          <input type='text' placeholder='Enter Items Here' ref={this.userInput} />
          <button onClick={this.handleSubmit}>Add</button>
        </form>
        <ListIterator listItems={this.state.items} deleteItem={this.handleDelete} />
      </div>
    );
  }
}

export default App;
