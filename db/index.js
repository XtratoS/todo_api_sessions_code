const mongoose = require("mongoose")
const Todo = require("./Todo");
mongoose.connect("mongodb+srv://user:user@cluster.shia4.mongodb.net/database?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
module.exports = {Todo};