const Joi = require("joi");

function validateTodo(todo){
    const schema = Joi.object({
        title: Joi.string().max(255).required(),
        description: Joi.string().min(3).required()
    });

    return schema.validate(todo);
}

module.exports = {validateTodo}