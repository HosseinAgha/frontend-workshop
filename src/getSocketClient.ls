require! {
  'socket.io-client': io
}

socketClient = io('http://localhost:8080')

module.exports = ->
  socketClient.emit do
    "sayHello"
    helloValue: "infinity"

  socketClient
