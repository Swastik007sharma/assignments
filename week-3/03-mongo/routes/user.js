const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const express = require("express")


const app = express();

// User Routes
<<<<<<< HEAD
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
=======
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
>>>>>>> c9e5e676f362e55cabe3a92f53c8554fbca126f8
});

module.exports = router