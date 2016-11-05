var css = require('./index.styl');
Selector = require('./Selector.js');
var options = [
  {label: "رعنا", value:"رعنا"},
  {label: "المیرا", value:"المیرا"},
  {label: "حسین", value:"حسین"},
  {label: "پوریا", value:"پوریا"},
  {label: "علی", value:"علی"},
  {label: "قلی", value:"قلی"}
]

var inputHappend = function (newInputValue, e) {
  console.log(newInputValue);
}

selector = new Selector(document.body, css.selContainer, "Names", options, inputHappend);
