const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('server says:', data);
  });


  conn.on("connect", () => {
    console.log('Connection is successfully established');
  });

  conn.on("connect", () => {
    conn.write("Name:ABA");

    // conn.on("connect", () => {
    //   conn.write("Message: Hello");
    });




  




  return conn;
};



// module.exports = {connect}
// connect();

module.exports = {
  connect
};