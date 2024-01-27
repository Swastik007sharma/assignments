const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPassword = "123456789"

const app = express()

app.use(bodyParse.json())

const emailSchema = zod().string().email()
const passwordSchema = zod().string().min(8)

function createJwt(username, password){
    const userResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!userResponse || !passwordResponse){
        return null
    }
    const token = jwt.sign({username,password}, jwtPassword)
    return token
}

function verifyJwt(token){
    try{
        const verification = jwt.verify(token, jwtPassword)
        return verification
    }catch(err){
        return null
    }
}

// Admin Routes
app.post('/admin/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if(Admin.find(username)){
        res.json({
            msg: "user already exist"
        })
    }else{
        Admin.create({
            username: username,
            password: password
        })
        res.json({
            msg: "User created successfully"
        })
    }
});

app.post('/admin/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const token = createJwt(username, password)

    localStorage.setItem("token",token)
});

app.post('/admin/courses', adminMiddleware, (req, res) => {
    const token = req.headers.authorization
    if(verifyJwt(token)){

    }

    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
    res.json({
        msg: "Course created successfully"
    })
});

app.get('/admin/courses', adminMiddleware, (req, res) => {
    Course.find().then(courses => {
        res.json({
            courses
        })
    })
});

module.exports = router;