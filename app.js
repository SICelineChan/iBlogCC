const express = require("express")
const cors = require('cors')

const homeBeginningContent = "This is another blog using the London App Brewery, Dr Angela Yu's Udemy course material. Also with some materials from Hamburg Coding School, Node.js course.";
const aboutContent = "This blog has been created using Node.js, ejs and with Bootstrap as CSS framework. I intend to use this as another experiment and to practice using Node."
const contactPage= "I will probably repeat the trick using the same provider for a contact page. Perhaps, I will also use this to try out a php server. "

const app = express();

app.use(cors());
const port = 3000;
app.use(express.static("public"));
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))

let newBlogs = [];

app.get("/", function (req, res) {

    res.render("index", 
    {intro: homeBeginningContent,
    posts: newBlogs}
    );
    
    });

app.get("/about", function (req, res) {
res.render("about", {about: aboutContent});

});
app.get("/contact", function (req, res) {
    res.render("contact", {contact: contactPage});
    
    });
app.get("/compose", function (req, res) {
        res.render("compose");

        
        });
//Here we record when user type something in the iput box, hence req.body.(name of the input name) 
app.post("/compose", function(req, res){
   let newBlog = {
    title: req.body.newTitle,
    content: req.body.newContent
   }
   newBlogs.push(newBlog);
    res.redirect("/");
    

})








app.listen(port, function(){
    console.log("listening to port " + port)
})