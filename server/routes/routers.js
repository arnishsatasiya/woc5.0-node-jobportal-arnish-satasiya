
const express=require("express")
const route=express.Router();
const services=require("../services/render")
const controller=require("../controller/controller");


route.get("/",services.homePage);
route.get("/temp",(req,res)=>{
    res.render("temp")
})
route.get("/student-signup",services.studentSignup);
route.get("/student-login",services.studentLogin);
route.get("/company-signup",services.companySignup);
route.get("/company-login",services.companyLogin);



route.post("/api/student",controller.createStudent);
route.get("/api/student/:usr",controller.findStudent);
route.post("/api/company",controller.createCompany);
route.get("/api/company/:usr",controller.findCompany);



module.exports=route