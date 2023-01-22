const axios= require("axios");


exports.homePage=(req,res)=>{
    res.render('home')
}


exports.studentSignup=(req,res)=>{
    res.render('student_signup')
}


exports.studentLogin=(req,res)=>{
    res.render('student_login')
}



exports.companySignup=(req,res)=>{
    res.render('company_signup')
}

exports.companyLogin=(req,res)=>{
    res.render('company_login')
}