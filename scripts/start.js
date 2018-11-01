require('babel-register');
require("babel-polyfill");
require('dotenv').config()

const server = require("../server/server");
const port  = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`App is Running on localhost:${port}`);
});