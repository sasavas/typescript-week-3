document.addEventListener("DOMContentLoaded", function () {
    let idCounter = 1;

    const todos = [
        { id: idCounter++, title: "Wash the car", body: "Which one, Mercedes or Volvo", done: false },
    ];
    const todoListElem = document.getElementById("todo-list");
    const titleElem = document.getElementById("title");
    const contentElem = document.getElementById("content");
    const noTodoItemText = document.querySelector("#no-todo-item-text");

    renderTodoList();
    registerTodoListEvents();

    function addNewTodo(todoTitle, todoContent) {
        if (todoTitle === "" || todoContent === "") {
            alert("Title and content must be entered!");
            return;
        }

        todos.push({ id: idCounter++, title: todoTitle, body: todoContent });

        clearInputs();

        renderTodoList();
    }

    function clearInputs() {
        titleElem.value = '';
        contentElem.value = '';
    }

    function removeTodo(id) {
        const index = todos.findIndex(item => item.id === parseInt(id));

        if (index > - 1) {
            todos.splice(index, 1);
        }

        renderTodoList();
    }

    function toggleTodoDone(id) {
        const todo = todos.find(todoItem => todoItem.id === parseInt(id));
    
        if(!todo) return;

        todo.done = !todo.done;

        renderTodoList();
    }

    function renderTodoList() {
        todoListElem.innerHTML = '';
        noTodoItemText.classList.remove('visible', 'hidden');

        if (todos.length === 0) {
            noTodoItemText.classList.add('visible')
            return;
        }

        noTodoItemText.classList.add('hidden')

        var todoElems = todos.map(todo => {
            const todoItem = document.createElement("div");
            todoItem.classList.add("todo-item");
            todoItem.classList.add("card");
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
                        <p class="body">
                            ${todo.body}
                        </p>
                    </div>
                    <button class="delete">X</div>
                </div>`

            return todoItem;
        });

        todoElems.forEach(elem => todoListElem.appendChild(elem));
    }

    function registerTodoListEvents() {
        document.getElementById("add-todo-btn")
            .addEventListener("click", function () {
                const todoTitle = titleElem.value.trim();
                const todoContent = contentElem.value.trim();
                addNewTodo(todoTitle, todoContent);
            });

        document.getElementById('todo-list').addEventListener('click', function (event) {
            const todoItem = event.target.closest('.todo-item');
            const id = todoItem.dataset.id;

            if (
                event.target.classList.contains('checkbox')
                || event.target.classList.contains('outer')
                || event.target.classList.contains('inner-filled')
            ) {
                toggleTodoDone(id);
            } else if (event.target.classList.contains('delete')) {
                removeTodo(id);
            }
        });
    }
});