const db = require ('.Database/Database');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get(/^(?!\/?api).+$/, (request, response) => {
  response.sendFile('/public/index.html', {root: __dirname });  
});

const data = [];
db.getLinks().then(result => data.push(...result));

app.get('/api/Home', (request, response) => (
  response.send()
));

app.listen(3000, () => console.log('server on port 3000'));
