import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListIterator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: this.props.listItems
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.listItems !== nextProps.listItems) {
      let sortedArray = nextProps.listItems.sort((elem1, elem2) => {
        let tempVar1 = elem1.text;
        let tempVar2 = elem2.text;
        if (tempVar1 < tempVar2)
          return -1
        if (tempVar1 > tempVar2)
          return 1
        return 0
      });
      return {
        listItems: sortedArray
      };
    }
    return null;
  }

  render() {
    return (
      <ul>
        {
          this.state.listItems.map(item => {
            return (
              <li key={item.key}>
                <span>{item.text}</span>
                <button onClick={() => this.props.deleteItem(item.key)}>x</button>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

ListIterator.defaultProps = {
  listItems: [],
  deleteItem: () => { }
};

ListIterator.propTypes = {
  listItems: PropTypes.array,
  deleteItem: PropTypes.func
};

export default ListIterator;
