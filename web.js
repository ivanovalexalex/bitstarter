var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var text = fs.readFileSync('index.html');

    response.send(text);
response.send('test');

    fs.readFile('index.html', function (err, data) {
       if (err) { console.log('error'); throw err;}
       response.send('passed 1');

       var buffer = new Buffer(data);
       response.send('passed 2');
       response.send(data.toString());
response.send('passed 3');
    });
    
    response.send('Hello World 3!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
