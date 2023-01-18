const axios= require("axios");

exports.studentSignup=(req,res)=>{
    res.render('student_signup')
}


exports.studentLogin=(req,res)=>{
    res.render('student_login')
}

exports.homePage=(req,res)=>{
    res.render('index')
}