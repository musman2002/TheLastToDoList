function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function completeTask(button) {
    const task = button.parentNode;
    task.classList.toggle('completed');
}

function removeTask(button) {
    const task = button.parentNode;
    task.parentNode.removeChild(task);
}
