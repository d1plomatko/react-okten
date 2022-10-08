import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{3,20}$/).required().messages({
        'string.pattern.base': 'Тільки літери (від 3 до 10 символів)'
    }),
    year: Joi.number().min(1991).max(new Date().getFullYear()).required(),
    price: Joi.number().min(1000).max(1000000).required()
});

export {
    carValidator
};