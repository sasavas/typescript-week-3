import { test, expect } from '@playwright/test';

test('Google arama çubuğuna metin yazma', async ({ page }) => {
    await page.goto('https://www.google.com/');
    const searchInput = page.locator('textarea[name="q"]');
    await searchInput.fill('Playwright');
    await searchInput.press('Enter');
    await expect(page).toHaveTitle(/Playwright/);
});