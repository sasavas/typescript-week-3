export function loadTodos() {
    const storedTodos = localStorage.getItem("todos");
    const todos = [];
    if (storedTodos) {
        todos.push(...JSON.parse(storedTodos));
    }
    return todos;
}
export function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}
