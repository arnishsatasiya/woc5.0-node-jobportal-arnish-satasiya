const mongoose = require("mongoose");

var StudentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname:{
        type:String,
        require:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    grad_year: {
        type: String,
        required: true
    },
    cpi: {
        type: String,
        require:true
    },
    skills: {
        type: String,
        required: true
    }

})

const Studentdb = mongoose.mongoose.model('studentdb', StudentSchema);

module.exports = Studentdb