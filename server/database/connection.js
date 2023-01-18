const mongoose = require("mongoose");

const connectStudentDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log("this is connection error")
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectStudentDB;