const express = require('express')
const router = express.Router();
const {addBook, getAllBooks, updateBook, getBookById, deleteBook} = require('../controller/bookController')
const authentication = require('../middleware/Authentication')

router.post("/add",authentication, addBook)
router.get("/allbooks", getAllBooks) 
router.get("/allbooks/:id",getBookById )
router.put("/:id",authentication, updateBook)
router.delete("/delete/:id",authentication, deleteBook)

module.exports = router
 