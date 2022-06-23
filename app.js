const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.set('view engine', 'pug');
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRouter);

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// http.createServer(app).listen(3000)을 축약한 것과 같다.
app.listen(3000, () => {
    console.log('3000번 포트 실행중');
})