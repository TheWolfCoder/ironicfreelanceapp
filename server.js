var express = require('express');
var app = express();

app.use(express.static(__dirname + "/app"));
app.listen(process.env.PORT || 8080);
console.log("Sever up on port 8080");