//------------------------express
const express = require("express");
const app = express()
const path = require("path");
//-------------------------DOtenv */
const dotenv = require("dotenv")
dotenv.config();
//---------------------------Database connection
const dbConnection = require("./config/dbConnection");
dbConnection()
//--------------------------------
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
//--------------------------Data parsing--
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//health
app.get("/health",(req, res)=>{
    try {
        res.status(200).json({
            message: "Health Router Working"
        })
        
    } catch (error) {
        console.error(error)
    }
})
//-------------------------login-----------
const authRouter = require('./router/authRouter')
app.use("/auth",authRouter )
//-----------------------book add
const addBook = require('./router/bookRouter')
app.use("/book",addBook)
//----------------------book Record --------
const borrowBook = require('./router/borrowBookRouter')
app.use("/book",borrowBook )

app.get("/home", (req, res) => {
    res.render("index");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.get("/books", (req, res) => {
    res.render("books");
});


app.listen(process.env.PORT, ()=>{
    console.log(`Server is runing on port ${process.env.PORT}`)
})