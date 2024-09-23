document.addEventListener("DOMContentLoaded", function() {
    const addTodoBtn = document.getElementById('add-todo-btn');

    const checkboxes = document.getElementsByClassName("checkbox");
    for (elem of checkboxes) {
        elem.addEventListener("click", function () {
            toggleTodoDone(elem);
        });
    }

    document.getElementById('todo-list').addEventListener('click', function(event) {
        if (event.target.classList.contains('delete')) {
            const todoItem = event.target.closest('.todo-item');
            todoItem.remove();
        }
    });

    addTodoBtn.addEventListener('click', addNewTodo);

    const toggleTodoDone = (checkbox) => {
        const outer = checkbox.getElementsByClassName("outer")[0];
        const filled = outer.getElementsByClassName("inner-filled");
        if (filled.length > 0) {
            outer.removeChild(filled[0]);

        } else {
            const innerFilledElement = document.createElement("div");
            innerFilledElement.classList.add("inner-filled");
            outer.appendChild(innerFilledElement);
        }
    }

    function addNewTodo(){
        const titleElem = document.getElementById("title");
        const contentElem = document.getElementById("content");

        const todoTitle = titleElem.value.trim();
        const todoContent = contentElem.value.trim();

        if(todoTitle === "" || todoContent === "") {
            alert("Title and content must be entered");
            return;
        }

        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.classList.add("card");
        todoItem.innerHTML = `
            <div class="container">
                <div class="checkbox">
                    <div class="outer">
                    </div>
                </div>
                <div class="content">
                    <p class="title">${todoTitle}</p>
                    <p class="body">
                        ${todoContent}
                    </p>
                </div>
                <button class="delete">X</div>
            </div>
        `;

        todoItem.querySelector('.checkbox')
            .addEventListener('click', function () { toggleTodoDone(this); });

        const todoList = document.getElementById("todo-list");

        todoList.appendChild(todoItem);

        clearInputs();
    }


    function clearInputs(){
        const titleElem = document.getElementById("title");
        const contentElem = document.getElementById("content");

        titleElem.value = '';
        contentElem.value = '';
    }
});