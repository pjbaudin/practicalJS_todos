// Practical Javascript

// Making a todo list app

// define todos variable
var todos = ["item 1", "item 2", "item 3"]


// Display the todo list
function displayTodos() {
    console.log("My todos:", todos);
}

// Add new todos and display new todo list
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

// Change item in the todo list
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

// delete a todo item
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}


// Testing functions
displayTodos()
addTodo("hello")
addTodo("world!")
changeTodo(1, "changed!")
deleteTodo(1)