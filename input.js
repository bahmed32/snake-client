
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  process.stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data){
  if (data === '\u0003') {
  process.exit();
}
};

setupInput();

module.exports = {
  setupInput
};


// listen for incoming data

// const connection = net.createConnection(connect());

// data = data.trim();

// if (data === 'a') {
//   conn.write("Move: left");
// }
// if (data === 'w') {
//   conn.write("Move: up");
// }
// if (data === 's') {
//   conn.write("Move: down");
// }
// if (data === 'd') {
//   conn.write("Move: right");
// }

// process.stdin.on("data", (data) => {
//   console.log("data", data);
