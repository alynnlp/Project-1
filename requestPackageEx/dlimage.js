var request = require('request');
var fs = require('fs');

//request is asynchronou
request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Message: ', response.statusMessage, response.headers['content-type']);
         //status message is OK  = statatus code is 200
         console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));

console.log('Downloading image...');
