const express = require("express")
const bodyParser = require("body-parser")

const app = express();



app.get("/", function(req, res){


    var today = new Date()
    var currentDay = today.getDate();
var today = new Date();
if (today.getDay() ===6 || today.getDay() ===0){
    res.send("yah today is weekend")
}else {
    res.send("boo!! i have to work")
}




})

app.listen(3000, function(){
    console.log("our server is running on port 3000")
})