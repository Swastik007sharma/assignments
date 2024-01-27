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
app.post('/signup', (req, res) => {
    // Implement admin signup logic
});

app.post('/signin', (req, res) => {
    // Implement admin signup logic
});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;