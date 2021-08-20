//import relevent files
const mongoose = require('mongoose');

//define the schema of professional documents
const professionalSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'Email is required',
        unique: true
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    url: {
        type: String,
        unique: true
    },
    strengths: [String], 
    weaknesses: [String], 
    projects: [String]
});

//create a model using the professional schema structure
const Professional = mongoose.model('Professional', professionalSchema);

module.exports = Professional;