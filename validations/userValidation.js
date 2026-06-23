const Joi = require("joi");
const userValidation = Joi.object({
    name: Joi.string()
        .min(5)
        .max(16)
        .trim()
        .required()
        .messages({
            'string.empty': 'name is required',
            'string.min': 'name must be at least 5 characters',
            'string.max': 'name must be at most 16 characters'
        }),
    email: Joi.string()
        .email()
        .trim()
        .required()
        .messages({
            'string.email': 'Please enter a valid email address',
            'string.empty': 'Email is required',
        }),
    password: Joi.string()
        .min(8)
        .pattern(
            new RegExp(
                '^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'
            )
        )
        .required()
        .messages({
            'string.pattern.base':
                'Password must include at least one letter, one number, and one special character',
            'string.min': 'Password must be at least 8 characters long',
            'string.empty': 'Password is required',
        })
});
module.exports = userValidation;