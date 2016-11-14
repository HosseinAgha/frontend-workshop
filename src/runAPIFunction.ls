require! {
  'socket.io-client': io
  'when': wn
}

socketClient = io('http://localhost:8080')

module.exports = (fn, params) ->
  wn.promise (resolve, reject) ->
    # {fn, params} ---> {fn: fn, params: params}
    socketClient.emit "runFunction", {fn, params}, (response) ->
      resolve response
    
