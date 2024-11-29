document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskText = taskInput.value.trim();

  if (taskText !== '') {
    var li = document.createElement('li');

    var taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = function () {
      var newTaskText = prompt('Edit task:', taskSpan.textContent);
      if (newTaskText !== null) {
        taskSpan.textContent = newTaskText.trim() || taskSpan.textContent;
      }
    };
    li.appendChild(editBtn);

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      li.remove();
    };
    li.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
  }
}
