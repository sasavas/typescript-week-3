import TodoItem from "./TodoItem";
import { useTodos } from "../states/TodoContext";

const TodoList: React.FC = () => {
    const { todos } = useTodos();

    return (
        <>
            {!todos.length && <h4 id="no-todo-item-text">You are all done!</h4>}
            <ul id="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </>
    );
};

export default TodoList;

