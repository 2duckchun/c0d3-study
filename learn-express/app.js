const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/2DC', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, function () {
    console.log('포트 실행 중');
})