import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Todo } from "../types";

interface TodoContextType {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    addTodo: (title: string, content: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const API_URL = 'http://localhost:3002/todos';

export const TodoProvider = ({ children }: { children: ReactNode; }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(API_URL);

            if (!response.ok) {
                alert('Failed to fetch todos');
                return;
            }

            const data = await response.json();

            if (data.message) {
                alert(data.message);
                return;
            }

            setTodos(data);
        }

        fetchTodos();
    }, [])


    const addTodo = async (title: string, content: string) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            if (!response.ok) {
                alert('Failed to add todo');
                return;
            }

            const newTodo = await response.json();

            setTodos((prevTodos) => [...prevTodos, newTodo]);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const toggleTodo = async (id: number) => {
        try {
            let todo = todos.find(todo => todo.id === id);
            if(!todo){
                alert('Could not find the Todo Item');
                return;
            }

            todo.done = !todo.done;

            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });

            if (!response.ok) {
                throw new Error('Failed to update todo');
            }

            const updatedItem = await response.json();
            setTodos((prevTodos) =>
                prevTodos.map((todo) => (todo.id === id ? updatedItem : todo))
            );
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const deleteTodo = async (id: number) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                alert('Failed to delete todo');
                return;
            }

            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        } catch (error) {
            alert('Error deleting todo: ' + error);
        }
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