const http = require('http');
const fs = require('fs');

const indexDocument = fs.readFileSync('index.html', 'utf-8');
const anotherDocument = fs.readFileSync('another.html', 'utf-8');


function requestListener(request, response) {

  if(request.method === 'GET') {
    if(request.url === '/' || request.url === '/index.html') {
      // You need to load the counter.json here
      // and increment "index" by one and save it
	  let counter_read = fs.readFileSync('counter.json', 'utf-8');
	  let counter = JSON.parse(counter_read);
	  let check = counter.index;
	  counter.index = check + 1;
	  fs.writeFileSync("counter.json", JSON.stringify(counter));
	  

      // You need to replace the '-!-' in index.html with
      // the new count before serving the document
	  let num = check + 1;
	  let new_count = '<tt>' + num + '</tt>';
	  let new_doc = indexDocument.replace('<tt>-!-</tt>', new_count);
	  // indexDocument.getElementByTagName('TT').innerHTML = check + 1;
	  
	  
	  
      response.writeHead(200);
      response.end(new_doc);
    } else if (request.url ==='/another.html') {

      // You need to load the counter.json here
      // and increment "another" by one and save it
	  let counter_read = fs.readFileSync('counter.json', 'utf-8');
	  let counter = JSON.parse(counter_read);
	  let check = counter.another;
	  counter.another = check + 1;
	  fs.writeFileSync("counter.json", JSON.stringify(counter));

      // You need to replace the '-!-' in another.html
      // the new count before serving the document
	  let num = check + 1;
	  let new_count = '<tt>' + num + '</tt>';
	  let new_doc = anotherDocument.replace('<tt>-!-</tt>', new_count);
	  // anotherDocument.getElementByTagName('TT').innerHTML = check + 1;



      response.writeHead(200);
      response.end(new_doc);
    } else {
      response.writeHead(404);
      response.end('File not found.');
    }
  }
}

const server = http.createServer(requestListener);
server.listen(3000);