const fs = require('fs');

fs.readFile('./inputs/4.txt', (err,data) => {
   dataString = data.toString()

   console.log(dataString.match(/(?<=pid:)\d{10}\s/g))
})