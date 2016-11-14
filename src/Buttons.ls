require! {
  'react': { Component, createElement }:React
  './Buttons.styl': css
}

module.exports = React.createClass do
  render: ->
    createElement "div", 
      * className: css.container
      createElement "div",
        * className: css.plus 
          onClick: (e) ~> @props.onIncrease?!
        "+"
      createElement "div",
        * className: css.minus 
          onClick: (e) ~> @props.onDecrease?!
        "-"