const http = require('http');

const requestListener = (request, response) => {
    const { method } = request;

    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    if (method === 'GET') {
	response.end("<h1>Hello!</h1>");
    }

    if (method === 'POST') {
	let body = [];

	request.on('data', (chunk) => )
    }
};


const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
