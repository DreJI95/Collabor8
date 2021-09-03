//import relevent files
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

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
    firstName: {
        type: String,
        required: 'First name is required.', 
        trim: true
    },
    lastName: {
        type: String,
        required: 'Last name is required.',
        trim: true
    },
    url: {
        type: String,
        trim: true,
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
    skills: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Skill'
    }],
    //TODO*********
    // projects: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Projects'
    // }]
});

//hook that hashes the user's plainttext password before saving it to the database
professionalSchema.pre("save", async function(next){
    //set the document password to a hashed password and then continue with the lifecycle
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

//define a method for professional objects to compare a supplied password with the account's associated password
professionalSchema.methods.evaluatePassword = async function(givenPassword) {
    return bcrypt.compare(givenPassword, this.password);
}

//create a model using the professional schema structure
const Professional = mongoose.model('Professional', professionalSchema);

module.exports = Professional;