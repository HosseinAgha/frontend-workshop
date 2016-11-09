import React, { Component, createElement } from 'react';
import Buttons from './Buttons.js';

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return createElement("div", {}, 
      createElement(Buttons, {onIncrease: () => this.onIncrease(), onDecrease: () => this.onDecrease()}),
      createElement("div", null, this.props.countNum)
    )
  }
  onIncrease() {
    this.props.onCountChange(this.props.countNum + 1)
  }
  onDecrease() {
    this.props.onCountChange(this.props.countNum - 1)
  }
}