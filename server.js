const db = require('./Database/database');
const express = require('express');
const payload = require('request-payload');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get(/^(?!\/?[news,main,api]).+$/, (request, response) => {
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
/*const d = [
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
*/
var data = [];

db.getNews()
.then( result => data.push(...result) )
.catch( error => console.log(error) );

app.get('/main', (request, response) => (
  response.send(data)
));


var newsid;
app.post('/Home/News/:news', (request, response) => {
  payload(request,  body => {
    newsid = body;
    console.log(newsid);
  })
});


var fullInf = [];
app.get('/news', (request, response) => {
  db.getFullInfByNewsId(newsid)
  .then( result =>  fullInf.push(...result))
  .catch( error => console.log(error) )
  console.log('FULLINF: ', fullInf);
  response.send(fullInf)
});



app.listen(3000, () => console.log('server on port 3000'));

//db.client.end();
//app.close() - посмотреть