const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'temple',
    password: '12345',
    port: 5432,
});

client.connect();

module.exports.client = client;

module.exports.getNews = async function() {   
    const query = await client.query('SELECT newsid, inf FROM tables.news'); 
    return query.rows;
}

module.exports.getFullInfByNewsId = async function(newsid) {   
    const query = await client.query('SELECT fullinf FROM tables.news where newsid = $1', [newsid]); 
    console.log('rOWS: ', query.rows);
    return query.rows;
}