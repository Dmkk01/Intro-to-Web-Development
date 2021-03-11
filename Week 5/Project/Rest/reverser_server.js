const fs  = require('fs');
const http = require('http');
const qs = require('querystring');

const formDocument = fs.readFileSync('form.html', 'utf-8');

// Replace this melodyReverser with your working implementation
function melodyReverser(melody) {
	let lis = melody.split(' ');
	let leng = lis.length;
	let new_lis = [];
	for (let i=leng; i > 0; i--) {
		new_lis.push(lis[i-1]);
	}
	let koniec = new_lis.join(' ');
	return koniec;
}
const requestListener = function (req, res) {

  if(req.method === 'GET') {
    res.writeHead(200);
    res.end(formDocument);
  }

  if(req.method === 'POST') {

    let body = "";

    req.on('data', function (chunk) {
      body += chunk;
    });

    req.on('end', function () {
      // Replace the following two lines with your solution
	  let postedData = qs.parse(data);
	  let calc = Object.values(postedData);
	  let reversed_melody = melodyReverser(calc[0]);
	  let final_melody = calc[0] + ' reversed is ' + reversed_melody;
      res.writeHead(200);
      res.end(final_melody);
    });

  }

}

const server = http.createServer(requestListener);
server.listen(3000);