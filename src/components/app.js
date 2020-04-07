import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  state = {
    foo: 'bar',
    value: 0
  };

  componentDidMount() {
    console.log('I mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('I updated', prevState);
  }

  render() {
    return (
      <div>
        <h1>Hi from App!</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleButtonClick}>+</button>
      </div>
    );
  }

  handleButtonClick = () => {
    console.log('handleButtonClick');

    this.setState({ value: this.state.value + 1 });
  };
}
