const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const express = require("express")

const app = express();

// Admin Routes
app.post('/admin/signup', (req, res) => {
    Admin.create({
        username: req.body.username,
        password: req.body.password
    }) 
    res.json({
        msg: "Admin created Successfully"
    })
});

app.post('/admin/courses', adminMiddleware, (req, res) => {
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.title,
    })
    res.json({
        msg: "Course created successfully"
    })
});

app.get('/admin/courses', adminMiddleware, (req, res) => {
    Course.find().then(courses => {
        res.json(courses)
    })
});

module.exports = router;