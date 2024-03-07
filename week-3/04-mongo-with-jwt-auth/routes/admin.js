const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const { createJwt}= require("../jwt_config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const user = await Admin.find({
        username: username,
        password: password
    })
    if (user) {
        const token = createJwt(username, password)
        res.json({
            token: token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and password"
        })
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const response = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
    res.json({
        message: 'Course created successfully',
        courseId: response._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})

    res.json({
        courses: response
    })
});

module.exports = router;