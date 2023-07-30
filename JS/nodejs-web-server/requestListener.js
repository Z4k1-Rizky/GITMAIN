const requestListener = (request, response) => {
    const { method, url } = request;

    response.setHeader('Content-Type', 'application/json');
    response.setHeader("X-Powered-By", "NodeJS")

    if (url === "/") {
        if (method === "GET") {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: "Ini adalah homepage!"
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`
            }));
        }        
    } else if (url === "/about") {
        if (method === "GET") {
            response.statusCode = 200;
            response.end(JSON.stringify({ 
                message: "Halo! ini adalah halaman about"
            }));
        } else if (method === "POST") {
            response.statusCode = 201;
            let body = [];

            request.on("data", (chunk) => {
                body.push(chunk);
            });

            request.on("end", () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(JSON.stringify({ 
                    message: `Halo, ${name}! ini adalah halaman about`
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: "Halaman tidak ditemukan!"
        }));
    }

    /*if (method === 'GET') {
    	response.end("Hello!");
    }

    if (method === 'POST') {
	    let body = [];

    	request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('data', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`Hai, ${name}!`);
        });
    }*/
};

module.exports = requestListener;