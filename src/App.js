import React, { Component, createElement } from 'react';
import Text from './Text';
import Input from './myTextInput'
// var React = require('react');
// var Component = React.Component;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerValue: ""
    }
  }
  render() {
    var that = this;
    // render input
    var in1 = createElement(Input,
      {
        onInputChange: function(newInput) {
          that.setState({headerValue: newInput});
        }
      }
    );
    // render header
    var txt = createElement(Text, {
        text: this.state.headerValue
    });
    // render everybody
    return createElement(
      "div", 
      null,
      in1,
      txt
    ) 
  }
}
