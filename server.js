const express = require('express');
// const mongoose = require('mongoose');
const router = require("./route/SchoolRoute")
const port = 2025;

const app = express();

app.use(express.json());

// const url = "mongodb://localhost:27017/SchoolDatabase"

// mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser:true})
// .then(()=>{
//     console.log("Database connected")
// })

app.use("/data", router)

app.listen(port, ()=>{
    console.log("Listening to port", port)
})