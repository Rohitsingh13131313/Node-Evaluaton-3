let express = require("express");
let routes = require("./routes1/register.route")


let app = express()
app.use(express.json())

app.use("/register",routes);

app.listen("8080",()=>{
    console.log("server is start at http://localhost:8080");
})