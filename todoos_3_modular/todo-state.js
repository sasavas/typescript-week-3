export default class TodoState {
    #idCounter;
    #todos;

    constructor() {
        this.#idCounter = 1;
        this.#todos = [
            { id: this.#idCounter++, title: "Wash the car", body: "Which one, Mercedes or Volvo", done: false },
        ];
    }

    getTodos() {
        return this.#todos;
    }

    addNewTodo(title, body) {
        if (!title || !body) return false;
        this.#todos.push({ id: this.#idCounter++, title, body, done: false });
        return true;
    }

    removeTodo(id) {
        const index = this.#todos.findIndex(todo => todo.id === id);
        if (index > -1) {
            this.#todos.splice(index, 1);
            return true;
        }
        return false;
    }

    toggleTodoDone(id) {
        const todo = this.#todos.find(todo => todo.id === id);
        if (todo) {
            todo.done = !todo.done;
            return true;
        }
        return false;
    }
}
