var express = require('express');
var app = express();

app.use(express.static(__dirname + "/src/app"));
app.listen(process.env.PORT || 3000);
console.log("Sever up on port 3000");