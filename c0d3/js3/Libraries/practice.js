/*
Now that you know how to use require, let's try to require a library that other people have written.
A simple library that does not require any download is fs, a library that gives you functions to interact with the
files and folders on your computer.
*/
const fs = require('fs')
fs.readdir('./', (err, files) => {
    files.forEach( (e) => {
        if (e.length < 10) {
            console.log(e)
        }        
    })
})

