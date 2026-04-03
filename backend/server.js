const express = require("express"); // import express
const app = express(); // app instance

// allow requests from frontend
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173",]
}
app.use(cors(corsOptions));

// route for backend api
app.get("/api", (req, res) => {
    res.json({"fruits": ["apple", "orange", "banana"]});
});

// run app
app.listen(8080, () => {
    console.log("Server started on port 8080");
});