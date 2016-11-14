require! {
  'react': React
  'react-dom': ReactDOM
  './App.ls': App
  './runAPIFunction.ls'
}

ReactDOM.render do
  React.createElement(App)
  document.getElementById('root')
