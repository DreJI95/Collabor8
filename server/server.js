//import files
const express = require('express');
const db = require('./database/config');

//instantiate an app and define the PORT to be utilized
const PORT = process.env.PORT || 3001;
const app = express();

//parse incoming requests that parse JSON and urlencoded (UTF-8) payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//once the database has been opened, instruct the server to listen for requests
db.once('open', ()=> app.listen(PORT, ()=> console.log(`Express server listening at http://localhost:${PORT}`)))



