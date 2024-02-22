const express = require("express")
const mongoose = require("mongoose");
const Courses = require("./models/courseModel");

const app = express();
app.use(express.json());

app.get('/courses', async (req, res) => {
    const course = await Courses.find();
    res.status(200).json(course);
})



mongoose.connect('mongodb+srv://admin:12345@testdb.22mv9ja.mongodb.net/?retryWrites=true&w=majority&appName=Testdb')
.then(() => {
    const port = process.env.port || 3000;
    app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}...`);
});
}).catch(() => {
    console.log(error);
});