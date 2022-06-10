const fs = require('fs');

setInterval(() => {
    fs.unlink('./asdf.js', (err) => {
        if (err) {
            console.error(err);
        }
    });
}, 1000)