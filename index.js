const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/config");
const cors = require("cors");
const path = require("path");

//Configuring Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connectionString = config.URI;

//Configure MongoDB Database
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log("MongoDB Database Running Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Database not Available ");
  });

//  Static Folder
app.use(express.static(path.join(__dirname, "public")));

const allRoutes = require("./routes/api");
app.use("/quotes", allRoutes);
// const adminRoutes = require("./routes/admin");
// app.use("/admin", adminRoutes);

//Listen
app.listen(3000, () => {
  console.log("Server is running...");
});
