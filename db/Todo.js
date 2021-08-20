const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required:true}
})


const Todo = mongoose.model("Todo", todosSchema);

module.exports = Todo;