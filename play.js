const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

const conn = connect();
console.log("Connecting ...");

// connect;
setupInput(conn);

// remove brackets so code output doesn't double