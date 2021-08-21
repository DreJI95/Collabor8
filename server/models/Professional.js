//import relevent files
const mongoose = require('mongoose');

//define the schema of professional documents
const professionalSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'Email is required',
        unique: true,
        trim: true,
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    },
    password: {
        type: String,
        required: 'Password is required',
        trim: true,
        minLength: 8
    },
    url: {
        type: String,
        trim: true,
        unique: true,
        match: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    },
    strengths: [{
        type: String, 
        trim: true, 
        minLength: 1,
        maxLength: 200
    }], 
    weaknesses: [{
        type: String, 
        trim: true, 
        minLength: 1,
        maxLength: 200
    }], 
    //ToDo: incorporate projects into an array
    //projects: [ProjectModel]
});

//create a model using the professional schema structure
const Professional = mongoose.model('Professional', professionalSchema);

module.exports = Professional;