const http = require("http");

function rqListener(req, res) {
    console.log(req)
}

const server = http.createServer(rqListener);
server.listen(8080);