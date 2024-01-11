const express = require('express');
const http = require('node:http');
const https = require('node:https')
const app = express();
// Need to pull this from google secret manager
const cat_api_key = process.env.CAT_API_KEY

app.get('/randomCats', (req, res) => {
  console.log(`Cat API Key : ${cat_api_key}`);
  res.send("test\n");
});

const port = parseInt(process.env.PORT) || 8081;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

function getCatImgURL () {
  https.get('https://api.thecatapi.com/v1/images/search', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
}