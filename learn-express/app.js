const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('hello Express!!')
})

app.listen(port, () => {
    console.log(`포트가 실행중입니다. 포트번호 ${3000}`);
})