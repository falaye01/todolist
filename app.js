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

const port = 3000 

app.listen(port || 4000, function(){
    console.log(`Our server is running on ${port}`)
})