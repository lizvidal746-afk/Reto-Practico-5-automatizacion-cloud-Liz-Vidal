const { test, expect } = require('@playwright/test');
const { safeClick, takeScreenshot } = require('../../helpers/common');

test.describe('DemoQA - Radio Button', () => {

  test('Seleccionar Yes y validar mensaje', async ({ page }) => {

    // Navegar a la página Radio Button
    await page.goto('/radio-button');

    // Clic en Yes
    await safeClick(page, 'label[for="yesRadio"]');

    // Validación
    await expect(page.locator('.text-success')).toHaveText('Yes');

    // Evidencia
    const screenshotPath = await takeScreenshot(page, "radio-yes");
    console.log("Screenshot guardado:", screenshotPath);
  });

  test('Seleccionar Impressive y validar mensaje', async ({ page }) => {

    // Navegar a la página Radio Button
    await page.goto('/radio-button');

    // Clic en Impressive
    await safeClick(page, 'label[for="impressiveRadio"]');

    // Validación
    await expect(page.locator('.text-success')).toHaveText('Impressive');

    // Evidencia
    const screenshotPath = await takeScreenshot(page, "radio-impressive");
    console.log("Screenshot guardado:", screenshotPath);
  });

});
