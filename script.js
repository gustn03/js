"use strict"; //javascript skrämmer mig vilket är varför jag bara fick måndag att funka som det ska men principen finns där och vill inte dra över mer

let todos = ["Äta", "Sova", "Gaming B)"];
let listRoot = document.querySelector(".list-root");
let listForm = document.querySelector("[data-list-form]");
let listInput = document.querySelector("[data-list-input]");

listForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (listInput.value.trim() === "") {
        return;
    }
    todos.push(listInput.value.trim());
    updateList();
    listInput.value= "";
});

function todoList(items) {
    let list = document.createElement("ul");
    items.forEach((item) => {
      let todoListItem = document.createElement("li");
      todoListItem.innerText = item;
      todoListItem.classList.add("todo-list-item");
      todoListItem.addEventListener("click", removeItem);
      list.append(todoListItem);
    });
    return list;
  }

function removeItem(event) {
    let itemToRemove = event.target.innerText;
    todos = todos.filter((item) => item !== itemToRemove);
    updateList();
}

function updateList(){
    listRoot.innerHTML = "";
    listRoot.append(todoList(todos));
}

updateList();
