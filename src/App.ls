require! {
  'react': { Component, createElement }:React
  './Counter.ls'
}

# import React, { Component, createElement } from 'react';
# import Counter from './Counter';

module.exports = React.createClass do

  getInitialState: ->
    { userCount: 2 }

  render: ->
    # render everybody
    createElement Counter,
      countNum: @state.userCount
      onCountChange: (newCount) ~> @countChange(newCount)

  countChange: (newCount) ->
    @setState({ userCount: newCount })
