const Joi = require("joi");

const title = Joi.string();
const body = Joi.string();
const userId = Joi.number();

const todoCreateSchema = Joi.object({
    title: title.required(),
    body: body.required(),
    userId: userId.required()
});

const todoUpdateSchema = Joi.object({
    title,
    body
});

module.exports = { todoCreateSchema, todoUpdateSchema }