const fs = require('fs');

const requestListener = (req, res) => {
    let url = req.url;
    let method = req.method;
if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>2DC</title></head>');
    res.write('<body><form action="/2DC" method="POST"><input type="text" name="message"><button type="submit">send</button></input></form></body>');
    res.write('</html>');
    return res.end();  
}
if (url === '/2DC' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt', message, (err) => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });

    });
}
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>2DC</title></head>');
res.write('<body><h1>hello</h1></body>');
res.write('</html>');
res.end();
}

module.exports = {
    handler : requestListener,
    justText : 'i am text!'
}