var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));


app.listen(3000);

console.info('server start on port 3000, http://loaclhost:3000');