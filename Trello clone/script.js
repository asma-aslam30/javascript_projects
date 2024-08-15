function addCard(listId) {
  var task = prompt("Enter task:");
  if (task.trim() !== "") {
    var ul = document.getElementById(listId);
    var li = document.createElement("li");
    li.className = "todo-item";
    li.textContent = task;

    var editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      editTask(editBtn);
    };

    li.appendChild(editBtn);
    li.draggable = true;
    li.ondragstart = drag;
    ul.appendChild(li);
    assignIds();
  } else {
    alert("Task cannot be empty!");
  }
}

// Functions to handle drag and drop
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  event.target.closest("ul").appendChild(draggedElement);
}

// Function to edit an existing task
function editTask(button) {
  var li = button.parentNode;
  var currentTask = li.firstChild.textContent.trim();
  var newTask = prompt("Edit task:", currentTask);
  if (newTask !== null && newTask.trim() !== "") {
    li.firstChild.textContent = newTask;
    li.appendChild(button); // Reattach the button to the updated text
  } else {
    alert("Task cannot be empty!");
  }
}

// Assign unique IDs to list items to facilitate dragging
function assignIds() {
  document.querySelectorAll(".todo-item").forEach(function (item, index) {
    item.id = "task-" + index;
  });
}

// Initial ID assignment
assignIds();
