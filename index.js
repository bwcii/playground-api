const express = require('express');
const https = require('node:https');
const app = express();

// Shout out to @m-a-r-c-l-i-n-o on stack overflow. I have so much to learn.
// https://stackoverflow.com/questions/37632025/in-a-nodejs-app-how-do-i-make-an-http-client-request-inside-an-express-method
app.get('/randomCats', function (req, res) {

  var str = '';

  var options = {
    host: 'api.thecatapi.com',
    path: '/v1/images/search'
  };

  var callback = function(response) {
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      str = JSON.parse(str);
      res.send(str); // SEND ACTUAL RESPONSE HERE
    });
  }

  var req = https.request(options, callback);
  req.end();

});

const port = parseInt(process.env.PORT) || 8081;

app.listen(port, () => {
  console.log(`listening on port ${port}\n`);
});