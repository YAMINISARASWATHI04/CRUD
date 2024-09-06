const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRouter = require("./routes/Students");

//const url = "mongodb://127.0.0.1:27017/CBIT";
//const url ="mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit3?replicaSet=m101";
const url =
  "mongodb+srv://yaminisaraswathi72:9390955221@merncrud.rziv5.mongodb.net/?retryWrites=true&w=majority&appName=merncrud";

const app = express();
mongoose.connect(url);
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});
app.use(cors());
app.use(express.json());

app.use("/Students", studentRouter);
app.listen(9000, () => {
  console.log("Server started");
});
