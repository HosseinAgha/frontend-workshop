import React, { Component, createElement } from 'react';
import css from './Buttons.styl';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return createElement(
      "div", 
      {className: css.container} ,
      createElement("div", {className: css.plus, onClick: (e) => this.props.onIncrease()}, "+"),
      createElement("div", {className: css.minus, onClick: (e) => this.props.onDecrease()}, "-")
    ) 
  }
}