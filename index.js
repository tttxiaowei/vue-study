const express = require('express');
const app = express();
let port = 9000;

console.log(11)
let aa = require('./test');
console.log(22)
console.log(aa)

const server = app.listen(port, function () {
    let host = server.address().address;
    console.log('vue-study listening at http://%s:%s', host, port);
});
app.use(express.static('public'));