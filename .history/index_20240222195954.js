const express = require("express")
const mongoose = require("mongoose");

const app = express();
app.use(express.json());





mongoose.connect('mongodb+srv://admin:<12345>@testdb.22mv9ja.mongodb.net/?retryWrites=true&w=majority&appName=Testdb')
.then(() => {
    const port = process.env.port || 3000;
    app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}...`);
});
}).catch(() => {
    console.log(error);
});