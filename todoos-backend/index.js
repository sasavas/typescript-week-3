const express = require('express');
const cors = require('cors');
const todoService = require('./todoService');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/todos', (req, res) => {
    const todos = todoService.getAllTodos();
    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    try {
        const todo = todoService.getTodoById(parseInt(req.params.id, 10));
        res.json(todo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

app.post('/todos', (req, res) => {
    try {
        const newTodo = todoService.createTodo(req.body);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.put('/todos/:id', (req, res) => {
    try {
        const updatedTodo = todoService.updateTodo(
            parseInt(req.params.id, 10),
            req.body
        );
        res.json(updatedTodo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

app.delete('/todos/:id', (req, res) => {
    try {
        todoService.deleteTodoById(parseInt(req.params.id, 10));
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

app.delete('/todos', (req, res) => {
    todoService.deleteAllTodos();
    res.status(200).send();
});

module.exports = app;
