changeColor = require('./changeBodyColor.js');
var css = require('./ball.styl');
console.log("changing color .....");
// changeColor("lightBlue");

var ball = document.createElement('div');
// ball.style.height = "60px"
// ball.style.width = "60px"
// ball.style.background = "red"
// ball.style.borderRadius = "50%"
ball.className = css.ball2
document.body.appendChild(ball);