const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const {createJwt} = require("../jwt_config");

// User Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        username: username
    }).then(()=>{
        User.create({
            username:username,
            password: password
        }).then(()=>{
            res.json({
                message: "User created successfully"
            })
        })
    })
    res.json({
        message: "User already exists"
    })
}); 


router.post('/signin', (req, res) => {
    // Implement admin signup logic
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }).then(()=>{
        const token = createJwt(username,password)
        res.json({
            token: token
        })
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then((course)=>{
        res.json({
            courses: course
        })
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const { decodedValue } = res.locals;
    const username = decodedValue.username
    const courseId = req.params.courseId

    User.updateOne({ username: username }, {
        "$push": { purchasedCourses: courseId }
    })
    res.json({
        message: "Purchase Successfull"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const { decodedValue } = res.locals;
    const username = decodedValue.username
    // const { decodedValue } = req;
    const user = await User.findOne({ 
        username: username 
    })
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
});

module.exports = router