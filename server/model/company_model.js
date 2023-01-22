const mongoose = require("mongoose");

var CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
    website: {
        type: String,
        required: true
    },
    job_position: {
        type: String,
        required: true
    },
    package: {
        type: String,
        required: true
    },
    required_cpi: {
        type: String,
        require:true
    },
    required_skills: {
        type: String,
        required: true
    }

})

const Companydb = mongoose.mongoose.model('companydb', CompanySchema);

module.exports = Companydb