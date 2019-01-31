// Practical Javascript
// version 5

// Making a todo list app

// define todos variable
var todolist = {
    todos: [],
    // add new todos object and display the new todo list
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
    },
    // change item in the todo list
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    // delete a todo item
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    // toggle completed to flip the completed property
    toggleCompleted: function(position) {
        var todo = this.todos[position]
        todo.completed = !todo.completed;
    },

    // toggle all completed
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        // Get number of completed todos
        this.todos.forEach(function(todo) {
            if (todo.completed === true) {
                completedTodos++
            }
        });
        this.todos.forEach(function(todo) {
            // Case 1: if everything is true, make everything false
            if (completedTodos === totalTodos) {
                todo.completed = false;
            // Case 2: make everything true
            } else {
                todo.completed = true;
            };
        });
    },
};


// Refactoring and creating handlers variable to handle many function
var handlers = {
    addTodo: function() {
       var addTodoInput = document.getElementById("addTodoInput");
       todolist.addTodo(addTodoInput.value);
       addTodoInput.value = '';
       view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todolist.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function(position) {
        todolist.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
        todolist.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = "";
        view.displayTodos();
    },
    toggleAll: function() {
        todolist.toggleAll();
        view.displayTodos();
    },
};

var view = {
    displayTodos: function() {
        //  define selector and clear the inner html
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = ''

        todolist.todos.forEach(function(todo, position) {
            // define html element to create
            var todoLi = document.createElement('li');

            // add attibute to li created element
            todoLi.textContent = todo.todoText;  
            todoLi.setAttribute('class', 'list-group-item');

            // create checkbox element
            var todoCheck = document.createElement('input');
            todoCheck.setAttribute('type', 'checkbox');
            todoCheck.setAttribute('class', 'form=check-input');

            // set check box attribute
            if (todo.completed === true) {
                todoCheck.setAttribute('checked', 'checked');
            };
            
            // append li to ul
            todosUl.appendChild(todoLi);
            
            // set id to i for the todoLi property
            todoLi.id = position;
            // append checkbox to li
            todoLi.appendChild(todoCheck);
            //  append delete button
            todoLi.append(this.createDeleteButton());

        },
        this);
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger deleteButton';
        deleteButton.textContent = 'Delete';
        return deleteButton;
    },
    setUpEventListener: function() {
        // Add event listener for the ul delete button
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function(event) {
            var elementClicked = event.target;

            if (elementClicked.classList.contains('deleteButton')) {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

// Run view event listeners
view.setUpEventListener();
