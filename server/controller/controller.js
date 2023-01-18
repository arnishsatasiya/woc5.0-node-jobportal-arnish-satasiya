const Studentdb = require("../model/student_model");


// add studetns

exports.createStudent = (req, res) => {
    console.log("hello create")
    // validare request
    if (!req.body) {
        res.status(400).send({ message: "Form can not be empty" });
        return
    }

    //new user
    const student = new Studentdb({
        name: req.body.name,
        email: req.body.email,
        username: req.body.user_name,
        password: req.body.pass
    })

    student
        .save(student)
        .then(data => {
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