import { loadTodos, saveTodos } from './storage.js';

class TodoState {
    private idCounter: number;
    private todos: Todo[];

    constructor() {
        this.idCounter = 1;

        const existingTodos = loadTodos();
        if(existingTodos){
            this.todos = [...existingTodos];
            this.idCounter = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
        } else {
            this.todos = [
                { id: this.idCounter++, title: "Wash the car", body: "Which one, Mercedes or Volvo", done: false },
            ];
        }
    }

    public getTodos(): Todo[] {
        return this.todos;
    }

    /**
     * Adds a new Todo item
     * @param title title
     * @param body body
     * @returns true if adding is successful, false otherwise
     */
    public addNewTodo(title: string, body: string): boolean {
        if (!title || !body) return false;
        this.todos.push({ id: this.idCounter++, title, body, done: false });
        saveTodos(this.todos);
        return true;
    }

    public removeTodo(id: number): boolean {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index > -1) {
            this.todos.splice(index, 1);
            saveTodos(this.todos);
            return true;
        }
        return false;
    }

    public toggleTodoDone(id: number): boolean {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.done = !todo.done;
            saveTodos(this.todos);
            return true;
        }
        return false;
    }
}

export default TodoState;
