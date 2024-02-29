const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rohan:rubh1718@cluster0.xqbwz.mongodb.net/Todo');

// Define schemas
const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    completed : Boolean
});


const create = mongoose.model('Todos', TodoSchema);
// const User = mongoose.model('User', UserSchema);
// const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    create,
    // User,
    // Course
}