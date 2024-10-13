let todos = [];

function getAllTodos() {
    return todos;
}

function getTodoById(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        throw new Error('To-Do not found');
    }
    return todo;
}

function createTodo({ title, content, done = false }) {
    if (!title) {
        throw new Error('Title is required');
    }
    if (!content) {
        throw new Error('Content is required');
    }

    const newTodo = {
        id: todos.length + 1,
        title,
        content,
        done,
    };

    todos.push(newTodo);
    return newTodo;
}

function updateTodo(id, { title, content, done }) {
    const todoIndex = todos.findIndex(t => t.id === id);
    if (todoIndex === -1) {
        throw new Error('To-Do not found');
    }

    const updatedTodo = {
        ...todos[todoIndex],
        title: title || todos[todoIndex].title,
        content: content || todos[todoIndex].content,
        done: done !== undefined ? done : todos[todoIndex].done,
    };

    todos[todoIndex] = updatedTodo;
    return updatedTodo;
}

function deleteTodoById(id) {
    const todoIndex = todos.findIndex(t => t.id === id);
    if (todoIndex === -1) {
        throw new Error('To-Do not found');
    }
    todos.splice(todoIndex, 1);
}

function deleteAllTodos() {
    todos = [];
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodoById,
    deleteAllTodos,
};
