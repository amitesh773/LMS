const mongoose = require('mongoose');

const bookRecordSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            required: true
        },

        releaseDate: {
            type: Date,
            required: true,
            default: Date.now
        },

        returnDate: {
            type: Date,
            required: true
        },

        status: {
            type: String,
            enum: ['Issued', 'Returned'],
            default: 'Issued'
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('BookRecord', bookRecordSchema);