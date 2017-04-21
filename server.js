var express = require('express');
var app = express();

app.use(express.static(__dirname + "/src/app"));
app.listen(process.env.PORT || 3001);
console.log("Sever up on port 3001");