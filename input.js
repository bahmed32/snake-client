const net = require("net");
const connect = require("./client");

let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  process.stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  data = data.trim();

  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 'w') {
    connection.write("Move: up");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
  if (data === '3') {
    connection.write("Say: Hi");
  }


};

module.exports = {
  setupInput
};




