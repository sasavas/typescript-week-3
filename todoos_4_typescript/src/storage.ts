export function loadTodos(): Todo[] {
    const storedTodos = localStorage.getItem("todos");
    const todos: Todo[] = [];
    if (storedTodos) {
        todos.push(...JSON.parse(storedTodos));
    }

    return todos;
}

export function saveTodos(todos: Todo[]) {
    localStorage.setItem("todos", JSON.stringify(todos));
}