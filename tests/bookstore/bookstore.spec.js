const { test, expect } = require('@playwright/test');

test('Book Store - DemoQA Oficial', async ({ page }) => {

  // 1. Ir a Book Store
  await page.goto('/books');

  // 2. Esperar a que cargue la tabla
  await page.locator('.ReactTable').waitFor();

  // 3. Validar libro correcto
  const title = page.getByText('Git Pocket Guide');
  await expect(title).toBeVisible();

  // 4. Evidencia
  await page.screenshot({
    path: 'evidencias/bookstore.png',
    fullPage: true
  });

});
