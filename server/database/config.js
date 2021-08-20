//import mongoose
const mongoose = require('mongoose');

//should be replaced with .env 
const dbName = 'Collabor8';

//instantiate a mongoose database connection using the defined URL of the system environment or localhost 
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//export the database connection
module.exports = mongoose.connection;