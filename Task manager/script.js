document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.querySelectorAll(".task-list");

  taskList.forEach((list) => {
    list.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    list.addEventListener("drop", (e) => {
      e.preventDefault();
      const taskId = e.dataTransfer.getData("text/plain");
      const task = document.getElementById(taskId);
      list.appendChild(task);
    });
  });

  document.getElementById("addTaskButton").addEventListener("click", () => {
    const input = document.getElementById("newTaskInput");
    const taskDesc = input.value.trim();
    if (taskDesc) {
      const newTask = createTask(taskDesc);
      document.getElementById("todo").appendChild(newTask);
      input.value = "";
    }
  });

  function createTask(desc) {
    const task = document.createElement("div");
    task.className = "task";
    task.draggable = true;
    task.textContent = desc;
    task.id = `task-${new Date().getTime()}`;

    task.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", task.id);
    });

    return task;
  }
});
