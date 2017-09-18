//4. Printing as module



 module.exports = function getHTML (options, callback) {
     /* Your code here */
     var https = require('https');
     var buffer = "";
   // usually in loops or conditionals
   // of creating an empty variable and adding data to it.
     https.get(options, function (response) {
     //  1. set encoding of received data to UTF-8
       response.setEncoding('utf8');
       // 2. the callback is invoked when a `data` chunk is received
       response.on('data', function (data) {
         //create a buffer = STORAGE that will add all the chunk together
         buffer += data;
         //console.log('data', data + '\n');
       });
       // 3. the callback is invoked when all of the data has been received
       // (the `end` of the stream)
       response.on('end', function() {
         console.log('Response stream complete.');
         callback(buffer);
       });
     });

 };

//6. Defining Callbacks
