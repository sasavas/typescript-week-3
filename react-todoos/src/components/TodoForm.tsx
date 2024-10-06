import useTodoForm from "../hooks/useTodoForm";
import Button from "../shared/components/Button";
import { useTodos } from "../states/TodoContext";


const TodoForm = () => {
    const { addTodo } = useTodos();

    const {
        title, setTitle, content, setContent, resetForm
    } = useTodoForm();

    const handleAddTodo = () => {
        addTodo(title, content);
        resetForm();
    };

    return (
        <div className="todo-item-new">
            <div className="card">
                <div className="container">
                    <div className="inputs">
                        <div className="container">
                            <input id="title"
                                value={title}
                                onChange={event => setTitle(event.target.value)}
                                type="text" placeholder="Enter title"
                            />
                        </div>
                        <div className="container">
                            <input id="content"
                                value={content}
                                onChange={event => setContent(event.target.value)}
                                type="text" placeholder="Enter content" />
                        </div>
                    </div>
                    <Button title="Add" onClickHandler={handleAddTodo} />
                </div>
            </div>
        </div>
    );
};

export default TodoForm;