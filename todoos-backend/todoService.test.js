// todoService.test.js
const {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodoById,
    deleteAllTodos,
  } = require('./todoService');
  
  describe('Todo Service', () => {
    beforeEach(() => {
      deleteAllTodos();
    });
  
    test('should create a new todo', () => {
      const newTodo = createTodo({
        title: 'Test Todo',
        content: 'This is a test content',
      });
  
      expect(newTodo).toHaveProperty('id', 1);
      expect(newTodo).toHaveProperty('title', 'Test Todo');
      expect(newTodo).toHaveProperty('content', 'This is a test content');
      expect(newTodo).toHaveProperty('done', false);
    });
  
    test('should throw an error if title is missing', () => {
      expect(() => createTodo({ content: 'No title' })).toThrow(
        'Title is required'
      );
    });
  
    test('should throw an error if content is missing', () => {
      expect(() => createTodo({ title: 'No content' })).toThrow(
        'Content is required'
      );
    });
  
    test('should get all todos', () => {
      createTodo({ title: 'Todo 1', content: 'Content 1' });
      createTodo({ title: 'Todo 2', content: 'Content 2' });
  
      const todos = getAllTodos();
      expect(todos.length).toBe(2);
      expect(todos[0].title).toBe('Todo 1');
      expect(todos[1].title).toBe('Todo 2');
    });
  
    test('should get a todo by id', () => {
      createTodo({ title: 'Test Todo', content: 'Content' });
  
      const todo = getTodoById(1);
      expect(todo).toHaveProperty('id', 1);
      expect(todo.title).toBe('Test Todo');
    });
  
    test('should throw an error if todo not found', () => {
      expect(() => getTodoById(999)).toThrow('To-Do not found');
    });
  
    test('should update a todo', () => {
      createTodo({ title: 'Old Title', content: 'Old Content' });
  
      const updatedTodo = updateTodo(1, {
        title: 'New Title',
        done: true,
      });
  
      expect(updatedTodo.title).toBe('New Title');
      expect(updatedTodo.done).toBe(true);
    });
  
    test('should throw an error if updating non-existent todo', () => {
      expect(() => updateTodo(999, { title: 'New Title' })).toThrow(
        'To-Do not found'
      );
    });
  
    test('should delete a todo by id', () => {
      createTodo({ title: 'Test Todo', content: 'Content' });
  
      deleteTodoById(1);
      expect(getAllTodos().length).toBe(0);
    });
  
    test('should throw an error if deleting non-existent todo', () => {
      expect(() => deleteTodoById(999)).toThrow('To-Do not found');
    });
  
    test('should delete all todos', () => {
      createTodo({ title: 'Todo 1', content: 'Content 1' });
      createTodo({ title: 'Todo 2', content: 'Content 2' });
  
      deleteAllTodos();
      expect(getAllTodos().length).toBe(0);
    });
  });
  