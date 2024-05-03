const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authController = require("./controllers/authControllers");
const roomController = require("./controllers/roomControllers");
const app = express();

// db connecting
mongoose.connect(process.env.MONGO_URL);

// middlewares
app.use(cors());
//a must to use req.body else will be undefined
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authController);
app.use("/room", roomController);

app.listen(process.env.PORT, () => console.log("Server has been started"));
