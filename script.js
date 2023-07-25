document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
  
    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (!taskText) return;
  
      const listItem = document.createElement('li');
      const taskTextElement = document.createElement('span');
      taskTextElement.textContent = taskText;
      taskTextElement.classList.add('task-text');
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');
  
      listItem.appendChild(taskTextElement);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
  
      taskInput.value = '';
    }
  
    function handleTaskClick(event) {
      const clickedElement = event.target;
  
      if (clickedElement.tagName === 'LI') {
        clickedElement.classList.toggle('completed');
      } else if (clickedElement.classList.contains('delete-button')) {
        const listItem = clickedElement.parentElement;
        taskList.removeChild(listItem);
      }
    }
  });
  