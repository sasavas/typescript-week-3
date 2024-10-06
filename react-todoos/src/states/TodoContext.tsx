import { createContext, ReactNode, useContext, useState } from "react";
import { Todo } from "../types";

interface TodoContextType {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    addTodo: (title: string, content: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode; }) => {
    let idCounter = 0;

    const [todos, setTodos] = useState<Todo[]>([
        { id: ++idCounter, title: 'Todo Title', content: 'Body', done: true }
    ]);

    const addTodo = (title: string, content: string) => {
        setTodos([
            ...todos,
            { id: ++idCounter, title, content, done: false }
        ]);
    };

    const toggleTodo = (id: number) => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
        setTodos(updatedTodos);
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, toggleTodo, deleteTodo, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error('useTodos must be used within a TodoProvider scope');
    }
    return context;
}