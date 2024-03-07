const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://swastik007sharma:1234@testing.tauhzfn.mongodb.net/Mongo-With-Jwt?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}