import React from "react";
import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {

    const toggleTodo = (id: number) => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
        setTodos(updatedTodos);
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <>
            {!todos.length && <h4 id="no-todo-item-text">You are all done!</h4>}
            <ul id="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodoDone={toggleTodo}
                    />
                ))}
            </ul>
        </>

    );
};

export default TodoList;

