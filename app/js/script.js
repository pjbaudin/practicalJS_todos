// Practical Javascript
// version 5

// Making a todo list app

// define todos variable
var todolist = {
    todos: [],
    // display the todo list
    displayTodos: function() {
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
    },

    // toggle all completed
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get number of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        // Case 1: if everything is true, make everything false
        if (completedTodos === totalTodos) {
            // Make everything false
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false
            }
        } else {
            // Case 2: make everything true
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true
            }
        }

        this.displayTodos();
    },
};


// Refactoring and creating handlers variable to handle many function
var handlers = {
    displayTodos: function() {
        todolist.displayTodos();
    },
    toggleAll: function() {
        todolist.toggleAll();
    },
    addTodo: function(todoText) {
       var addTodoInput = document.getElementById("addTodoInput");
       todolist.addTodo(addTodoInput.value);
       addTodoInput.value = '';
    },

};