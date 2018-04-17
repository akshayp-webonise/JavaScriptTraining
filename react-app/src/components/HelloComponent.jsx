import ReactDOM from 'react-dom';
import TestChildComponent from 'Components/TestChildComponent';

class HelloComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <TestChildComponent />
      </div>
    );
  }
}

ReactDOM.render(
  <HelloComponent />,
  document.getElementById('container')
);
