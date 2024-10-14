import { expect, test, request } from '@playwright/test';

test.describe('Todo App Tests', () => {
    test.beforeEach(async ({ page }) => {
        const apiContext = await request.newContext();
        const response = await apiContext.delete('http://localhost:3002/todos');
        expect(response.ok()).toBeTruthy();

        await page.goto('http://localhost:3000/todos');
    });

    test('should add a new todo', { tag: '@fast' }, async ({ page }) => {
        // act
        await page.locator('#title').fill('Test Todo Title');
        await page.locator('#content').fill('Test Todo Content');

        await page.locator('#add-todo-btn').click();

        const todoList = page.locator('#todo-list li');
        await expect(todoList).toHaveCount(1);

        const todoTitle = await page.locator('#todo-list li:nth-child(1)').textContent();
        expect(todoTitle).toContain('Todo Title');

        const apiContext = await request.newContext();
        const response = await apiContext.get('http://localhost:3002/todos');
        expect(response.ok()).toBeTruthy();

        const data = await response.json();
        expect(data.length).toEqual(1);
    });

    test('should mark a todo as done', { tag: '@slow' }, async ({ page }) => {
        await page.locator('#title').fill('Test Todo Title');
        await page.locator('#content').fill('Test Todo Content');
        await page.locator('#add-todo-btn').click();

        // act
        await page.locator('#todo-list li:nth-child(1) .checkbox').click();

        // assert
        const checkmark = page.locator('#todo-list li:nth-child(1) .inner-filled');
        await expect(checkmark).toBeVisible();
    });

    test('should show "You are all done!" when no todos', async ({ page }) => {
        await expect(page.locator('#no-todo-item-text')).toBeVisible();
    });

    test('', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Todos' }).click();
        await page.getByRole('button', { name: 'X' }).click();
        await page.getByPlaceholder('Enter title').click();
        await page.getByPlaceholder('Enter title').fill('Test');
        await page.getByRole('heading', { name: 'You are all done!' }).click();
    });
})