const { test, expect } = require('@playwright/test');
const { safeClick, takeScreenshot } = require('../../helpers/common');

test.describe('DemoQA - Check Box', () => {

  test('Seleccionar Desktop y validar resultado', async ({ page }) => {

    // Ir a la página Check Box
    await page.goto('/checkbox');

    // Asegurar que el árbol esté expandido
    await safeClick(page, '.rct-option-expand-all');

    // Seleccionar la opción "Desktop"
    await safeClick(page, 'label[for="tree-node-desktop"]');

    // Validar mensaje
    const result = page.locator('#result');
    await expect(result).toContainText('desktop');

    // Evidencia
    const screenshotPath = await takeScreenshot(page, "checkbox");
    console.log("Screenshot guardado en:", screenshotPath);
  });

});
