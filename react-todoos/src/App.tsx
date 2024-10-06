import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styles from './App.module.css';
import { TodoProvider } from "./states/TodoContext";

function App() {
  return (
    <TodoProvider>
      <main className="container">
        <h1 className={styles.title}>Todoos</h1>

        <TodoList />
        <TodoForm />

      </main>
    </TodoProvider>
  );
}

export default App;
