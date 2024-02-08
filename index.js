const addTaskBtn = document.getElementById('addTaskBtn');
const taskName = document.getElementById('taskName');
const totalTaskContainer = document.getElementById('totalTask');
const totalTasks = document.createElement('span');
totalTaskContainer.appendChild(totalTasks);
const allTasks = [];

// taskName.addEventListener('input', (e) => {

// });
calculateTotalTasks()
addTaskBtn.addEventListener('click', function () {
    const allTasksElem = document.getElementById('allTasksElem');
    const taskName = document.getElementById('taskName');
    const taskRadio = document.createElement('input')
    taskRadio.type = 'radio';
    const addTask = document.createElement('div');
    allTasks.push(taskName.value);

    allTasks.map((task) => {
        addTask.textContent = task;
        allTasksElem.appendChild(addTask);
        allTasksElem.appendChild(taskRadio)
    })
    taskName.value = '';
    calculateTotalTasks();
});

function calculateTotalTasks() {
    totalTasks.textContent = allTasks.length;

}



