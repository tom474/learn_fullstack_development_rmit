const http = require("http");

const port = 2222;

const server = http.createServer((req, res) => {
	console.log(req);
	res.write("Hello World!");
	res.end();
});

server.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}/`);
});
