const Studentdb = require("../model/student_model");
const Companydb = require("../model/company_model");

// add studetns

exports.createStudent = (req, res) => {
    // validate request
   
    if (!req.body) {
        res.status(400).send({ message: "Form can not be empty" });
        return
    }
    console.log(req.body.cpi)
    //new user
    const student = new Studentdb({
        firstname: req.body.first_name,
        lastname:req.body.last_name,
        email: req.body.email,
        username: req.body.user_name,
        password: req.body.pass,
        gender:req.body.gender, 
        age:req.body.age, 
        grad_year:req.body.Gra_year, 
        cpi:req.body.cpi, 
        skills:req.body.skill
    })
    // console.log("hello")
    // console.log(student)

    student
        .save(student)
        .then(data => {
            // console.log("redirect thay che")
            // res.send(data);
            
            res.redirect("/");
        })
        .catch(err => {
            res.status(500).send({
                message: "some error occurs"
            })
        })
}


exports.findStudent = (req, res) => {
    // console.log("hello")
    const username = req.params.usr;

    Studentdb.findOne({ username: username })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `May be user not found` })

            }
            else {
                res.send(data)
                // res.redirect("/")
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update user information" })
        })

}



exports.createCompany=(req,res)=>{

    if(!req.body){
        res.status(400).send({message:"Form can not be empty"});
        return;
    }

    // new company

    const company=new Companydb({
        name:req.body.name,
        email:req.body.email,
        username:req.body.user_name,
        password:req.body.pass,
        website:req.body.website,
        job_position:req.body.job_position,
        package:req.body.package,
        required_cpi:req.body.required_cpi,
        required_skills:req.body.required_skill,
    })

    company
    .save(company)
    .then(data=>{
        res.redirect("/");
    })
    .catch(err=>{
        res.status(500).send({
            message:"some error occurs"
        })
    })

}

exports.findCompany = (req, res) => {
    // console.log("hello")
    const username = req.params.usr;

    Companydb.findOne({ username: username })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `May be user not found` })

            }
            else {
                res.send(data)
                // res.redirect("/")
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update user information" })
        })

}