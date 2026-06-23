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

app.listen(process.env.PORT, ()=>{
    console.log(`Server is runing on port ${process.env.PORT}`)
})