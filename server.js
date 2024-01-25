const http = require('http');

const HOSTNAME= "localhost";
const PORT = 8900;

const requestHandler = (req, res) => {
    res.writeHead(200);
    res.write('My name is Adetula Johnson Zion');
    res.end();
}

const server = http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}/`)
});


