import TodoState from './todo-state.js'

const todoState = new TodoState();

const todoListElem = document.getElementById("todo-list");
const titleElem = document.getElementById("title");
const contentElem = document.getElementById("content");
const noTodoItemText = document.querySelector("#no-todo-item-text");

renderTodoList();

document.getElementById("add-todo-btn").addEventListener("click", function () {
    const title = titleElem.value.trim();
    const content = contentElem.value.trim();

    if (todoState.addNewTodo(title, content)) {
        clearInputs();
        renderTodoList();
    } else {
        alert("Title and content must be entered!");
    }
});

todoListElem.addEventListener("click", function (event) {
    const todoItem = event.target.closest('.todo-item');
    if (!todoItem) return;
    const id = parseInt(todoItem.dataset.id);

    if (event.target.classList.contains('checkbox')
        || event.target.classList.contains('outer')
        || event.target.classList.contains('inner-filled')) {
        todoState.toggleTodoDone(id);
        renderTodoList();
    } else if (event.target.classList.contains('delete')) {
        todoState.removeTodo(id);
        renderTodoList();
    }
});

function renderTodoList() {
    todoListElem.innerHTML = '';
    noTodoItemText.classList.remove('visible', 'hidden');

    const todos = todoState.getTodos();

    if (todos.length === 0) {
        noTodoItemText.classList.add('visible');
        return;
    }

    noTodoItemText.classList.add('hidden');

    todos.forEach(todo => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item", "card");
        todoItem.dataset.id = todo.id;
        todoItem.innerHTML = `
                <div class="container">
                    <div class="checkbox">
                        <div class="outer">
                            <div class="inner-filled ${todo.done ? 'visible' : 'hidden'}"></div>
                        </div>
                    </div>
                    <div class="content">
                        <p class="title">${todo.title}</p>
                        <p class="body">${todo.body}</p>
                    </div>
                    <button class="delete">X</button>
                </div>`;
        todoListElem.appendChild(todoItem);
    });
}

function clearInputs() {
    titleElem.value = '';
    contentElem.value = '';
}
