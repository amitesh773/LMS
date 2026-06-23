const Book = require('../models/Book');
const bookValidation = require('../validations/bookValidation');

const addBook = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Only admin can add books'
            });
        }
        const { error } = bookValidation.validate(req.body);

        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }

        const book = new Book(req.body);
        await book.save();

        res.status(201).json({
            success: true,
            message: 'Book added successfully',
            book
        });

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json({
            success: true,
            count: books.length,
            books
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const getBookById = async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }

        res.status(200).json({
            success: true,
            book
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                totalCopies: req.body.totalCopies,
                availableCopies: req.body.availableCopies
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            book: updatedBook
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};


module.exports = { addBook, getAllBooks, updateBook, getBookById, deleteBook };