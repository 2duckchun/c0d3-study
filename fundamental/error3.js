const fs = require('fs').promises;

setInterval(() => {
   try {
    setInterval(() => {
        fs.unlink('./asdff.js')
    }, 1000)
   } catch (err) {
    console.log(err);
   }
}, 1000);