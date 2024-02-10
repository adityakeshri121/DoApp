const todoList = document.getElementById('todo-list');
const addTodoInput = document.getElementById('add-todo');

// Event listener for adding new todo
addTodoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && addTodoInput.value.trim() !== '') {
        addTodo();
    }
});

// Function to add a new todo
function addTodo() {
    const todoText = addTodoInput.value.trim();

    // Create todo item
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
<input type="checkbox" onclick="toggleCompleted(this)">
<span>${todoText}</span>
<button onclick="removeTodo(this)">Delete</button>
`;

    // Append todo item to the list
    todoList.appendChild(todoItem);

    // Clear the input field
    addTodoInput.value = '';
}

// Function to toggle the completed status of a todo
function toggleCompleted(checkbox) {
    const todoText = checkbox.nextElementSibling; // Get the span element next to the checkbox
    todoText.classList.toggle('completed'); // Toggle the 'completed' class
}

// Function to remove a todo
function removeTodo(button) {
    const todoItem = button.parentNode;
    todoList.removeChild(todoItem);
}