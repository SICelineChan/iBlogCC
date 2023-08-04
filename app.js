const express = require("express")
const cors = require('cors')
const ejs = require("ejs")

const app = express();

app.use(cors());
const port = 3000;
app.set('view engine', 'ejs')

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
});







app.listen(port, function(){
    console.log("listening to port " + port)
})