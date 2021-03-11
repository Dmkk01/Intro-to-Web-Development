const http = require('http');

const server = http.createServer( function (req, res) {
  res.setHeader('Set-Cookie', ['food=pizza', 'dessert=cookie']);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Done setting cookies.');
}).listen(3000);