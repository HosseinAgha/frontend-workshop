import React, { Component, createElement } from 'react';
import Counter from './Counter';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userCount: 2 };
  }
  render() {
    // render everybody
    return createElement(Counter, { countNum: this.state.userCount, onCountChange: (newCount) => this.countChange(newCount) });
  }
  countChange(newCount){
    this.setState({ userCount: newCount });
  }
}
