// Practical Javascript
// version 3

// Making a todo list app

// define todos variable
var todolist = {
    todos: ["item 1", "item 2", "item 3"],
    // display the todo list
    displayTodos: function() {
        console.log('My todos', this.todos);
    },
    // add new todos and display the new todo list
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    // change item in the todo list
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    // delete a todo item
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
};


// Testing functions
todolist.displayTodos()
todolist.addTodo('test add')
todolist.addTodo('test add for later remove')
todolist.changeTodo(1, 'This is changed')
todolist.deleteTodo(4)
