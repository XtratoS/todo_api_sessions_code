const {todosController} = require("../controllers")

// export a function that takes the app and maps
// each route with a controller to handle requests on that route
// given a unique action (get, post, etc...)
module.exports = function (app){
    app.get("/api/todos", todosController.getAllTodos)
    app.get("/api/todos/:todo_id", todosController.getTodoById) // todo_id gets passed in the request.params object
    app.post("/api/todos", todosController.addTodo)
    app.put("/api/todos/:todo_id", todosController.updateTodo);
    app.delete("/api/todos/:todo_id", todosController.removeTodo);
}