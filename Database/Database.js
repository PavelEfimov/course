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

module.exports.getLinks = async function() {   
    const query = await client.query('SELECT link, title, special FROM tables.home_links'); 
    console.log("ROWS: ", query.rows);
    return query.rows;
}