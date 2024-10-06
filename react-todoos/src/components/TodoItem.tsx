import { Todo } from "../types";
import { useTodos } from "../states/TodoContext";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const { toggleTodo, deleteTodo } = useTodos();

    return (
        <li key={todo.id} className="todo-item card">
            <div className="container">
                <div className="checkbox" onClick={() => toggleTodo(todo.id)}>
                    <div className="outer">
                        {
                            todo.done && <div className="inner-filled"></div>
                        }
                    </div>
                </div>
                <div className="content">
                    <p className="title">{todo.title}</p>
                    <p className="body">
                        {todo.content}
                    </p>
                </div>
                <button className="delete" onClick={() => deleteTodo(todo.id)}>X</button>
            </div>
        </li>
    );
};

export default TodoItem;
