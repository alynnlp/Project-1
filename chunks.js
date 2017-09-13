//1.  Printing in Chunks
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  //utilize the https library; outside or inside function doesnt matter here
  var https = require('https');

  https.get(requestOptions, function (response) {
  // set encoding of received data to UTF-8
  response.setEncoding('utf8');
  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    console.log('data', data + '\n');

  });
  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });

  });
}
getAndPrintHTMLChunks()
//2. Printing with Buffered Strings
//3. Printing with Parameters
//4. Printing with Callbacks
//5. Make it a Module
//6. Defining Callbacks