// Function to retrieve tasks from local storage
function getTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}

// Function to save tasks to local storage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const tasks = getTasksFromLocalStorage();

        const newTask = {
            text: taskInput.value,
            completed: false,
        };

        tasks.push(newTask);
        saveTasksToLocalStorage(tasks);

        renderTasks();
        taskInput.value = '';
    }
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = getTasksFromLocalStorage();

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="removeTask(this)">Remove</button>
        `;
        if (task.completed) {
            li.classList.add('completed');
        }
        taskList.appendChild(li);
    });
}

// Function to complete a task
function completeTask(button) {
    const task = button.parentNode;
    const tasks = getTasksFromLocalStorage();

    const index = Array.from(task.parentNode.children).indexOf(task);
    tasks[index].completed = !tasks[index].completed;
    saveTasksToLocalStorage(tasks);

    renderTasks();
}

// Function to remove a task
function removeTask(button) {
    const task = button.parentNode;
    const tasks = getTasksFromLocalStorage();

    const index = Array.from(task.parentNode.children).indexOf(task);
    tasks.splice(index, 1);
    saveTasksToLocalStorage(tasks);

    renderTasks();
}

// Initial rendering of tasks on page load
document.addEventListener('DOMContentLoaded', renderTasks);
