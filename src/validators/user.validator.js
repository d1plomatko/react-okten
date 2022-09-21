import Joi from "joi";

const userValidator = Joi.object({
    name : Joi.string().regex(/^[a-zA-Zа-яА-яІіЇїЄє]{2,10}$/).required().messages({
        'string.pattern.base' : 'Тільки літери (від 2 до 10 символів)'
    }),
    username : Joi.string().min(3).max(15).required(),
    age : Joi.number().min(18).max(100).required()
})

export {userValidator}