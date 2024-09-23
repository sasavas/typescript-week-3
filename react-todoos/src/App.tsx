import { useState } from "react";

function App() {

  interface Todo {
    id: number,
    title: string,
    content: string,
    done: boolean,
  }

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Todo Title', content: 'Body', done: true }
  ]);

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
    setTodos(updatedTodos);
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <main className="container">
      <h1>Todoos</h1>

      <ul id="todo-list">
        {todos.map((todo, index) => (
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
        ))}
      </ul>

      <h4 id="no-todo-item-text" className="hidden">You are all done!</h4>

      <div className="todo-item-new">
        <div className="card">
          <div className="container">
            <div className="inputs">
              <div className="container">
                <input id="title" type="text" placeholder="Enter title" />
              </div>
              <div className="container">
                <input id="content" type="text" placeholder="Enter content" />
              </div>
            </div>
            <button id="add-todo-btn">Add</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
