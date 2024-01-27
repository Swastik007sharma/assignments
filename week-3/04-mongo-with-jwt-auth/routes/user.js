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


app.post('/signin', (req, res) => {
    // Implement admin signup logic
});

app.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
