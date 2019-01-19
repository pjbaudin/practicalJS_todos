// Practical Javascript
// version 4

// Making a todo list app

// define todos variable
var todolist = {
    todos: [],
    // display the todo list
    displayTodos: function() {
        console.log('My todos', this.todos);
    },
    // add new todos object and display the new todo list
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
        this.displayTodos();
    },
    // change item in the todo list
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    // delete a todo item
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    // toggle completed to flip the completed property
    toggleCompleted: function(position) {
        var todo = this.todos[position]
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};


// Testing functions
todolist.displayTodos()
todolist.addTodo('test add')
todolist.addTodo('test add for later remove')
todolist.changeTodo(1, 'This is changed')
todolist.toggleCompleted(1)
todolist.deleteTodo(4)
