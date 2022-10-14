const myObj = require('./helper1.js')
const myArr = require('./helper2.js')

const result = myArr.filter(e => {
    return myObj.getData(e)
})

console.log(result);
