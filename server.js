const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get(/^(?!\/?api).+$/, (request, response) => {
  response.sendFile(__dirname + '/public/index.html');  
});

const someData = [
  {
    name: "Pasha"
  }, 
  {
    name: "Sveta"
  }
];

app.get('/api/Home', (request,response) => (
  response.send(someData)
));

app.listen(3000, () => console.log('server on port 3000'));
