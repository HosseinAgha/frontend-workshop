import React, { Component, createElement } from 'react';
import css from './Text.styl';

export default class Text extends Component {
  render() {
    return createElement(
      "h1", 
      {
        className: css.container
      }, 
      this.props.text
    ) 
  }
}