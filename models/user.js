const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['admin', 'student'],
        default: 'student'
    },

    borrowedBooks: [
        {
            book: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Book'
            },

            issueDate: {
                type: Date,
                default: Date.now
            },

            returnDate: {
                type: Date
            },

            status: {
                type: String,
                enum: ['issued', 'returned'],
                default: 'issued'
            }
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);