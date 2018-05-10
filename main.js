//@ts-check
const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 8080
});
let id = 0;
wss.on('connection',function(ws) {
  ws.id=id++;
  console.log("User connected", ws.id);
  ws.on('close',function(data) {
  console.log("closed connection :",ws.id);    
  })
  ws.on('message', function incoming(data) {
    console.log('message : ',data);
  });
})
