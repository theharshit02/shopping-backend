require("dotenv").config();
const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"

app.get("/api/health", function(req, res){
    res.send(`Server up and running on ${new Date()}`)
})


app.listen(port, function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on ${host}:${port}`)
    }
})