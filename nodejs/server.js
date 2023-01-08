const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    console.log(req.url, req.method, req.headers)
    // process.exit()
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<meta charset="utf-8">')
    res.write('<head><title>hello.</title></head>')
    res.write('<body><h1>한글</h1></body>')
    res.write('</meta>')
    console.log(res)
})

server.listen(8080)