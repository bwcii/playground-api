const express = require('express');
const http = require('node:http');
const https = require('node:https');
const { url } = require('node:inspector');
const app = express();
// Need to pull this from google secret manager
const cat_api_key = process.env.CAT_API_KEY

app.get('/randomCats', (req, res) => {
  //console.log(`Cat API Key : ${cat_api_key}`);
  var catURL = getCatImgURL();
  console.log(catURL);
  res.send(catURL);
});

const port = parseInt(process.env.PORT) || 8081;

app.listen(port, () => {
  console.log(`listening on port ${port}\n`);
});

function getCatImgURL () {
  https.get('https://api.thecatapi.com/v1/images/search', (res, next) => {
  res.setEncoding('utf8');
  //console.log('statusCode:', res.statusCode);
  //console.log('headers:', res.headers);
  var output = "";
  var myurl = "";
  
  res.on('data', (d) => {
    output += d;
  });
  res.on('end', (e) => {
    myurl = JSON.parse(output)[0].url;
    //process.stdout.write(url);
    console.log(myurl);
    return myurl;
  });

}).on('error', (e) => {
  console.error(e);
});
}