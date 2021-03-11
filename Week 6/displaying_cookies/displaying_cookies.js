const http = require('http');
const cookie = require('cookie');
const static = require('node-static');

const file = new static.Server();

http.createServer(function (request, response) {
  if(request.method === 'GET' && request.url === '/') {
    file.serve(request, response);
  }

  if(request.method === 'GET' && request.url === '/one_cookie.html') {
    // Set one cookie here
	response.setHeader('Set-Cookie', ['red=tomato']);

    //request.addListener('end', function () {
    file.serve(request, response);
	//}).resume();
  }

  if(request.method === 'GET' && request.url === '/two_cookies.html') {
    response.setHeader('Set-Cookie', ['food=pizza', 'dessert=cookie']);

    //request.addListener('end', function () {
    file.serve(request, response);
	//}).resume();
  }

}).listen(3000);