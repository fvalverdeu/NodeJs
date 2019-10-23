const express = require('express');

// create express app
const app = express();

// define a simple route
app.get('/', (req, res) => {
  res.json({'message': 'default route...'})
})


// listen for requests
app.listen(3001, () => {
  console.log('Listen in port 3001');
})
