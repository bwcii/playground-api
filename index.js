const express = require('express');
const app = express();
// Need to pull this from google secret manager
const cat_api_key = process.env.CAT_API_KEY

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT) || 8081;
console.log({port});
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
  console.log(`$CAT_API_KEY : ${cat_api_key}`);
});