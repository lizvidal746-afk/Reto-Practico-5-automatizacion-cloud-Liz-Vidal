const { test, expect } = require('@playwright/test');

test('Página DemoQA carga correctamente', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('https://demoqa.com/');
});
