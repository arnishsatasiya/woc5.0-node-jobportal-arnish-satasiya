const mongoose=require("mongoose");

var StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
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
    password:{
        type:String,
        required:true
    }
})

const Studentdb=mongoose.mongoose.model('studentdb',StudentSchema);

module.exports=Studentdb