const fs  = require('fs');
const http = require('http');
var qs = require('querystring');

const formDocument = fs.readFileSync('form.html', 'utf-8');


const requestListener = function (req, res) {
  // Complete the requestListener function.
  // You don't have to edit the rest of the file.
  if(req.method === 'GET') {
    res.writeHead(200);
    res.end(formDocument);
  }
  
  
  if(req.method === 'POST') {
    let data = '';

    req.on('data', function (chunk) {
      data += chunk;
    });

    req.on('end', function () {
      let postedData = qs.parse(data);
	  let calc = Object.values(postedData);
	  let fina = parseInt(calc[0]) + parseInt(calc[1]);
	  let koniec = 'That adds up to: ' + fina;
      res.writeHead(200);
	  res.end(koniec);
    });	  
  }
}

const server = http.createServer(requestListener);
server.listen(3000);
