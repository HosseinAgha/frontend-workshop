require! {
  'react': { Component, createElement }:React
  './Buttons.ls': Buttons
}

module.exports = React.createClass do
  render: ->
    createElement "div", null, 
      createElement Buttons,
        onIncrease: ~> @onIncrease!
        onDecrease: ~> @onDecrease!
      createElement "div", null, @props.countNum

  onIncrease: ->
    @props.onCountChange(@props.countNum + 1)

  onDecrease: ->
    @props.onCountChange(@props.countNum - 1)