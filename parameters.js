//3. Printing with Parameters

// but accepts a paramater, options, which is an object
// that contains values for host and path, like requestOptions.
//  Reuse whatever code you need from part 2 -
//  we're still getting and printing the HTML.
  function getAndPrintHTML (options) {


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
       console.log(buffer);
     });
   });
 }

 var requestOptions = {
   host: 'sytantris.github.io',
   path: '/http-examples/step3.html'
 };

 getAndPrintHTML(requestOptions)


//4. Printing with Callbacks
//5. Make it a Module
//6. Defining Callbacks
