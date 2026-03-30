const express = require("express");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.get('/health-check', (req, res) => {
    res.send("Server is up and running");
})
app.use("/users", userRoutes);


module.exports = app;