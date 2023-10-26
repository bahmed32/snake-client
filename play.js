// const net = require("net");

// // establishes a connection with the game server
// const connect = function() {
//   const conn = net.createConnection({
//     host: '165.227.47.243',
//       port: 50541,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

const {connect} = require("./client.js")
// listen for incoming data

// const connection = net.createConnection(connect());
connection = connect();

connection.on('data', (data) => {
  console.log('server says:', data);
});


console.log("Connecting ...");
connect()
