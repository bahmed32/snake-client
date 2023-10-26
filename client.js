const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
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

  });
  conn.on("connect", () => {
    conn.write("Move left");
  });

  // process.stdin.on("data", (data) => {
  //   console.log("data", data);

  // //   data = data.trim();

  // //   if (data === 'a') {
  // //     conn.write("Move: left");
  // //   }
  // //   if (data === 'w') {
  // //     conn.write("Move: up");
  // //   }
  // //   if (data === 's') {
  // //     conn.write("Move: down");
  // //   }
  // //   if (data === 'd') {
  // //     conn.write("Move: right");
  // //   }
  // // }
  // );

  return conn;
};



// module.exports = {connect}
connect();

module.exports = {
  connect
};