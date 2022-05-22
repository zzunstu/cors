let express = require("express");
let app = express();
let WebSocket = require("ws");

let wss = new WebSocket.Server({port:3000});
wss.on("connection", function(client){
  client.on("message", function(data){
    console.log(data.toString());
    client.send("哈哈！");
  });
});