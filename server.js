const express = require("express");
const app = express();
const connectDB = require("./database/connection");

connectDB();

app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./api/User'));


const Port = process.env.Port || 3000;

app.listen(Port, () => console.log("Service started"));
