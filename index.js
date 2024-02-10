const todoList = document.getElementById('todo-list');
const addTodoInput = document.getElementById('add-todo');
const totalTask = document.getElementById('total-tasks');
const allTodos = [];
var currentFilter = 'all';
// Event listener for adding new todo
addTodoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && addTodoInput.value.trim() !== '') {
        addTodo();
    }
});


function addTodo() {

    const todoText = addTodoInput.value.trim();
    const task = { text: todoText, completed: false };
    allTodos.push(task);

    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
<input type="checkbox" onclick="toggleCompleted(this)">
<span>${todoText}</span>
<button class="delete-button" onclick="removeTodo(this)">Delete</button>
`;
    todoList.appendChild(todoItem);
    addTodoInput.value = '';
    totalTask.textContent = allTodos.length;

    applyFilter();
}




function toggleCompleted(checkbox) {
    const todoText = checkbox.nextElementSibling;
    todoText.classList.toggle('completed');

    for (task of allTodos) {
        if (task.text === todoText.innerHTML) {
            task.completed = true;
        }
        else {
            task.completed = false;
        }
    }
    console.log(allTodos)
}

// Function to remove a todo
function removeTodo(button) {
    const todoItem = button.parentNode;
    const insideSpan = todoItem.querySelector('span');
    const textToRemove = insideSpan.innerHTML;
    var indexToRemove = allTodos.splice(allTodos.indexOf(textToRemove), 1);
    totalTask.textContent = allTodos.length;
    todoList.removeChild(todoItem);
}


function filterTasks(filterType) {
    currentFilter = filterType;
    applyFilter();
}

function applyFilter() {
    const todoItems = document.querySelectorAll('.todo-item');
    // console.log(todoItems)
    todoItems.forEach(function (item, index) {
        console.log(item, index)
        const completed = allTodos[index].completed;
        console.log(completed);
        if (currentFilter === 'all' || (currentFilter === 'completed' && completed) || (currentFilter === 'uncompleted' && !completed)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}