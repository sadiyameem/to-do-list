window.onload = function() {
    document.getElementById("addBtn").addEventListener("click", addTask);
    document.getElementById("taskInput").addEventListener("keypress", function(e) {
        if (e.key === "Enter") addTask();
    });
};

function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();
    if (text === "") return;

    addTaskToList(text, false);
    input.value = "";
}

function addTaskToList(text, completed) {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = text;
    if (completed) span.classList.add("completed");
    li.appendChild(span);

    // done button
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "doneBtn";
    doneBtn.onclick = function() {
        span.classList.toggle("completed");
        updateTaskCount();
    };
    li.appendChild(doneBtn);

    // delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function() {
        li.remove();
        updateTaskCount();
    };
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    updateTaskCount();
}

function updateTaskCount() {
    let count = document.querySelectorAll("#taskList li").length;
    let total = document.querySelectorAll("#taskList li").length;
    let completed = document.querySelectorAll("#taskList li span.completed").length;
    let pending = total - completed;

    document.getElementById("taskCount").textContent = 
        `Tasks: ${total} (Completed: ${completed} Pending: ${pending})`;
}

    // clear button
    document.getElementById("clearAllBtn").onclick = function() {
        document.getElementById("taskList").innerHTML = "";
        updateTaskCount();
    }






