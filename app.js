const express = require("express")
const cors = require('cors')

const homeBeginningContent = "This is another blog using the London App Brewery, Dr Angela Yu's Udemy course material. Also with some materials from Hamburg Coding School, Node.js course.";

const app = express();

app.use(cors());
const port = 3000;
app.use(express.static("public"));
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))


app.get("/", function (req, res) {

    
    res.render("index", {home: homeBeginningContent});
    
});







app.listen(port, function(){
    console.log("listening to port " + port)
})