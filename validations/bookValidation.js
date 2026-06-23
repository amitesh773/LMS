const Joi = require('joi');

const bookValidation = Joi.object({
    title: Joi.string()
        .trim()
        .min(2)
        .max(100)
        .required()
        .messages({
            'string.empty': 'Book title is required',
            'string.min': 'Title must be at least 2 characters',
            'string.max': 'Title cannot exceed 100 characters'
        }),

    author: Joi.string()
        .trim()
        .min(3)
        .max(50)
        .required()
        .messages({
            'string.empty': 'Author name is required',
            'string.min': 'Author name must be at least 3 characters',
            'string.max': 'Author name cannot exceed 50 characters'
        }),

    isbn: Joi.string()
        .trim()
        .required()
        .messages({
            'string.empty': 'ISBN number is required'
        }),

    category: Joi.string()
        .trim()
        .required()
        .messages({
            'string.empty': 'Category is required'
        }),

    totalCopies: Joi.number()
        .integer()
        .min(1)
        .required()
        .messages({
            'number.base': 'Total copies must be a number',
            'number.min': 'At least 1 copy is required'
        }),

    availableCopies: Joi.number()
        .integer()
        .min(0)
        .required()
        .messages({
            'number.base': 'Available copies must be a number',
            'number.min': 'Available copies cannot be negative'
        }),

    description: Joi.string()
        .trim()
        .allow('')
});

module.exports = bookValidation;