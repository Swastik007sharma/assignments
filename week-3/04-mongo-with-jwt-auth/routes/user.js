const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPassword = "123456789";

const app = express();
app.use(bodyParse.json())

// User Routes
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(User.find(username)){
        res.json({
            msg: "User already exist"
        })
    }else{
        User.create({username, password})
        res.json({
            msg: "user Created Successfully"
        })       
    }
}); 


router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router