"use strict";
require("@babel/polyfill");
require("@babel/register");

var config = require("../config/default.json");
const port = config.api_port;

const app = require("../app").default;
var http = require("http");

var server = http.createServer(app);
server.listen(port);

server.on("listening", () => {
  console.log("Server created successfully.listen port no:" + port);
});
