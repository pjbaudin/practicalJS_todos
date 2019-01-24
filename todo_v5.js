// Practical Javascript
// version 5

// Making a todo list app

// define todos variable
var todolist = {
    todos: [],
    // display the todo list
    displayTodos: function() {
        console.log('My Todos:');
        if (this.todos.length === 0) {
            console.log("Your todo list is empty!")
        } else {
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x) ', this.todos[i].todoText);
                } else {
                    console.log("( ) ", this.todos[i].todoText);
                }
            }
        }
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
todolist.displayTodos();
todolist.addTodo('test add');
todolist.deleteTodo(0);
todolist.addTodo('test add 2');
todolist.addTodo('test add 3');
todolist.deleteTodo(2);
todolist.changeTodo(1, 'This is changed');
todolist.toggleCompleted(1);

