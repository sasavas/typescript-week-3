import TodoState from './todo-state.js';

document.addEventListener("DOMContentLoaded", function () {
    const todoState = new TodoState();

    const todoListElem = document.getElementById("todo-list") as HTMLElement;
    const titleElem = document.getElementById("title") as HTMLInputElement;
    const contentElem = document.getElementById("content") as HTMLInputElement;
    const noTodoItemText = document.querySelector("#no-todo-item-text") as HTMLElement;

    renderTodoList();

    document.getElementById("add-todo-btn")?.addEventListener("click", function () {
        const title = titleElem.value.trim();
        const content = contentElem.value.trim();
        
        if (todoState.addNewTodo(title, content)) {
            clearInputs();
            renderTodoList();
        } else {
            alert("Title and content must be entered!");
        }
    });

    todoListElem.addEventListener("click", function (event: Event) {
        const todoItem = (event.target as HTMLElement).closest('.todo-item');
        if (!todoItem) return;
        const id = parseInt((todoItem as HTMLElement).dataset.id || "0");

        if ((event.target as HTMLElement).classList.contains('checkbox')
            || (event.target as HTMLElement).classList.contains('outer')
            || (event.target as HTMLElement).classList.contains('inner-filled')) {
            todoState.toggleTodoDone(id);
            renderTodoList();
        } else if ((event.target as HTMLElement).classList.contains('delete')) {
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
            todoItem.dataset.id = todo.id.toString();
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
});
