const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const serveStatic = require('serve-static');


app.use(serveStatic(__dirname + "/dist"));

app.listen(port);
console.log('server started '+ port);