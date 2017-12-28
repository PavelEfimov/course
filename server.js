//const db = require('./Database/database');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get(/^(?!\/?[db,api]).+$/, (request, response) => {
  response.sendFile('/public/index.html', {root: __dirname });  
});

/*app.get('/api/Home', (request, response) => (
  response.send(data)
));

var data = [];
db.getLinks()
.then(result => data.push(...result))
.catch( error => console.log("ERROR: ", error));
*/
const d = [
  {
    name: "First news"
  }, 
  {
    name: "Second news"
  }
]

app.get('/db/Home', (request, response) => (
  response.send(d)
));

app.listen(3000, () => console.log('server on port 3000'));

//db.client.end();
//app.close() - посмотреть