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

selector = new Selector(document.body, css.selContainer, "Names", options);
