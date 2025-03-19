function addTask() {
    const tasks = document.getElementById("tasks-list");
    const li = document.createElement('li');
    const counter = document.getElementById('track');

    counter.innerHTML = "List of tasks: " + tasks.children.length;

    const inputValue = document.getElementById("task").value;
    if (inputValue === "") {
        return;
    }

    document.getElementById("tasks").style.display = "block";

    const taskText = document.createElement('span');
    taskText.innerHTML = inputValue;
    li.appendChild(taskText);
    tasks.appendChild(li);

    counter.innerHTML = "List of tasks: " + tasks.children.length;

    const span = document.createElement('span');
    li.appendChild(span);

    const updateButton = document.createElement('button');
    updateButton.innerHTML = "Update";
    span.appendChild(updateButton);

    updateButton.addEventListener('click', function () {
        const inputUpdate = document.createElement('input');
        inputUpdate.type = "text";
        inputUpdate.placeholder = "update task";
        span.insertBefore(inputUpdate, deleteButton);

        const inputUpdateButton = document.createElement('button');
        inputUpdateButton.innerHTML = "Update Task";
        span.insertBefore(inputUpdateButton, deleteButton);
        updateButton.disabled = true;

        inputUpdateButton.addEventListener('click', function () {
            if (inputUpdate.value === "") {
                return;
            }
            taskText.innerHTML = inputUpdate.value;
            inputUpdateButton.remove();
            inputUpdate.remove();
            updateButton.disabled = false;
            markCompleted.innerHTML = "Mark as Completed";
            taskText.style.textDecoration = 'none';
        });
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    span.appendChild(deleteButton);

    deleteButton.addEventListener('click', function () {
        li.remove();
        deleteButton.remove();
        counter.innerHTML = "List of tasks: " + tasks.children.length;
        if (tasks.children.length === 0) {
            document.getElementById("tasks").style.display = "none";
        }
    });

    const markCompleted = document.createElement('button');
    markCompleted.innerHTML = "Mark as Completed";
    span.appendChild(markCompleted);
    markCompleted.addEventListener('click', function () {
        markCompleted.innerHTML = "Completed";
        taskText.style.textDecoration = 'line-through';
    });
    document.getElementById("task").value = "";
}

document.querySelector("#task").addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        addTask();
    }
});