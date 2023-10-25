const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: // IP address here,
      port: // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// listen for incoming data

connection.on('data', (data) => {
  console.log('server says:', data);
});

console.log("Connecting ...");
connect();