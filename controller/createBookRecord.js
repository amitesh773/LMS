const BookRecord = require('../models/BookRecord');
const Book = require('../models/Book');

const createBookRecord = async (req, res) => {
    try {
        const { userId, bookId, returnDate } = req.body;
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }
        if (book.availableCopies <= 0) {
            return res.status(400).json({
                success: false,
                message: 'No copies available'
            });
        }
        const record = await BookRecord.create({
            userId,
            bookId,
            returnDate
        });
        book.availableCopies -= 1;
        await book.save();
        const responseData = {
            ...record.toObject(),
            releaseDate: record.releaseDate.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata'
            }),
            returnDate: record.returnDate.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata'
            }),
            createdAt: record.createdAt.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata'
            }),
            updatedAt: record.updatedAt.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata'
            })
        };

        res.status(201).json({
            success: true,
            message: 'Book issued successfully',
            record: responseData
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createBookRecord
};