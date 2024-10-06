import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./types";

function App() {

  let idCounter = 0;

  const [todos, setTodos] = useState<Todo[]>([
    { id: ++idCounter, title: 'Todo Title', content: 'Body', done: true }
  ]);

  const handleAddTodo = (title: string, content: string) => {
    setTodos([
      ...todos,
      { id: ++idCounter, title, content, done: false }
    ]);
  };

  return (
    <main className="container">
      <h1>Todoos</h1>

      <TodoList todos={todos} setTodos={setTodos} />
      <TodoForm addTodo={handleAddTodo} />

    </main>
  );
}

export default App;
