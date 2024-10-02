function addTask() {
  const field = document.getElementById("Todo");
  const todo = field.value;
  field.value = "";
  if (!todo) {
    return alert("Something needs to be typed in order to be a task!");
  };
  const todoText = document.createElement("li");
  const text = document.createTextNode(todo);
  const todoList = document.getElementById("Todo-list");
  todoText.appendChild(text);
  todoText.setAttribute("onclick", "this.remove()");
  todoList.appendChild(todoText);
};