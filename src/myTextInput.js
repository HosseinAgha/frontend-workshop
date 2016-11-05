import React, { Component, createElement } from 'react';
import css from './myTextInput.styl';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }
  render() {
    console.log("rerendered with:", this.state.inputValue);
    var that = this;
    return createElement(
      "input", 
      {
        onChange(e) {
          that.setState({ inputValue: e.target.value });
          that.props.onInputChange(that.state.inputValue);
        },
        value: this.state.inputValue,
        className: css.container
      } 
    ) 
  }
}