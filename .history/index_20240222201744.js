const express = require("express")
const mongoose = require("mongoose");
const Courses = require("./models/courseModel");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json("Welcome to the Root of the API!");
});


//GET backend courses and sort by name
app.get("/courses/backend-courses-sorted", async (req, res) => {
    try {
      const years = await Courses.find();
      let backendCourses = [];
  
      // Iterate through years to gather backend courses
      years.forEach((year) => {
        ["1st Year", "2nd Year", "3rd Year", "4th Year"].forEach((yearKey) => {
          if (year[yearKey]) {
            year[yearKey].forEach((course) => {
              // Check if the course description contains keywords related to backend
              const isBackendCourse = course.tags.includes("Database") ||
                                       course.tags.includes("Systems") ||
                                       course.tags.includes("Software") ||
                                       course.tags.includes("Enterprise") ||
                                       course.tags.includes("Web") ||
                                       course.tags.includes("Information");
              if (isBackendCourse) {
                backendCourses.push(course);
              }
            });
          }
        });
      });
  
      // Sort backend courses alphabetically by description
      backendCourses.sort((a, b) => a.description.localeCompare(b.description));
  
      res.json(backendCourses);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});


mongoose.connect('mongodb+srv://admin:12345@testdb.22mv9ja.mongodb.net/?retryWrites=true&w=majority&appName=Testdb')
.then(() => {
    const port = process.env.port || 3000;
    app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}...`);
});
}).catch(() => {
    console.log(error);
});