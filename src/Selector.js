var css = require('./Selector.styl');
var Fuse = require('fuse.js');

var _filtering = function(options, inputValue) {
  var fuseOpts = {
    caseSensitive: false,
    includeScore: false,
    shouldSort: true,
    tokenize: false,
    threshold: 0.5,
    location: 0,
    distance: 500,
    maxPatternLength: 500,
    keys: ["label"]
  };
  var f = Fuse(options, fuseOpts);
  return f.search(inputValue);
}

module.exports = class Selector {
  constructor(parent, className, label, options, onInput) {
    this.parent = parent;
    this.className = className;
    this.label = label;
    this.options = options;
    this.visibleOptions = options;
    this.userOnInput = onInput;
    var elem = this._createTheElement();
    parent.appendChild(elem);
  }
  _createTheElement() {
    // create the container
    var container = document.createElement('div');
    container.className = this.className + " " + css.container;
    // create the input
    var input = document.createElement('input');
    this.inputElem = input;
    var that = this;
    input.addEventListener("keyup", function(e){ that.onInput(e); } );
    input.placeholder = this.label;
    input.className = css.input;
    // create List
    var list = document.createElement('ul');
    list.className = css.list;
    this.listElem = list;
    this._updateListElems();
    container.appendChild(input);
    container.appendChild(list);
    return container;
  }
  _updateListElems() {
    var list = this.listElem;
    for (var opIndex in this.visibleOptions) {
      var option = document.createElement('li');
      option.innerHTML = this.visibleOptions[opIndex].label;
      option.className = css.option;
      list.appendChild(option);
    };
  }
  _filterOptions() {
    if(this.inputValue === ""){
      return this.options;
    }
    var fuseOpts = {
      caseSensitive: false,
      includeScore: false,
      shouldSort: true,
      tokenize: false,
      threshold: 0.5,
      location: 0,
      distance: 500,
      maxPatternLength: 500,
      keys: ["label"]
    };
    var f = new Fuse(this.options, fuseOpts);
    return f.search(this.inputValue);
  }
  _emptyList() {
    while (this.listElem.firstChild) {
      this.listElem.removeChild(this.listElem.firstChild);
    }
  }
  onInput(e) {
    this.userOnInput(e.target.value, e);
    this.inputValue = e.target.value;
    this.visibleOptions = this._filterOptions();
    this._emptyList();
    this._updateListElems()
  }
}