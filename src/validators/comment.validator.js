import Joi from "joi";

const commentValidator = Joi.object({
    name : Joi.string().min(4).max(20).required(),
    body : Joi.string().min(4).max(200).required()

})

export {
    commentValidator
}