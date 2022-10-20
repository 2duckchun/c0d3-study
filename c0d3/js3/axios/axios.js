const axios = require('axios')

axios('https://www.c0d3.com/api/lessons').then((data) => {
    console.log(data.data);
})