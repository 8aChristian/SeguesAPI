const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use("/api",userRoutes);

//route
app.get("/",(req, res) => {
res.send("Wellcome to my Api");
});

//mongodb connect
mongoose.connect(
  process.env.MONGODB_URI).then(()=>console.log("Connected to MONGODB ATLASS"))
  .catch((error)=>console.error(error));
app.listen(port,()=> console.log("Server Listening on port", port));