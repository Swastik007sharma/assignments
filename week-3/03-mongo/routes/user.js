const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const express = require("express")


const app = express();

// User Routes
app.post('users/signup', (req, res) => {
    User.Create({
        username: req.body.username,
        password: req.body.password,
    })
    res.json({
        msg: "User created successfully"
    })
});

app.get('users/courses', (req, res) => {
    Course.find().then(courses => {
        res.json(courses)
    })
});

app.post('users/courses/:courseId', userMiddleware, (req, res) => {
});

app.get('users/purchasedCourses', userMiddleware, (req, res) => {
    const username = req.headers.username
    const password = req.headers.password
});
