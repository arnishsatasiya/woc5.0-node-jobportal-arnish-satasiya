
const express=require("express")
const route=express.Router();
const services=require("../services/render")
const controller=require("../controller/controller")


route.get("/",services.homePage);
route.get("/student-signup",services.studentSignup);
route.get("/student-login",services.studentLogin);


route.post("/api/student",controller.createStudent)
route.get("/api/student/:usr",controller.findStudent);

module.exports=route