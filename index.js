const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./app/src/routes/routes")

const app = express();

const PORT = 8000;


// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//  routes
app.use("/api", routes)

app.listen(PORT,(err)=>{
    if(err) throw err; 
    console.log("Server is running on port: ", PORT)
    
})

