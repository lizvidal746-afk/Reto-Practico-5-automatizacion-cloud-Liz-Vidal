const { test, expect } = require('@playwright/test');
const { userExample } = require('../../data/userData');
const { safeType, safeClick, takeScreenshot } = require('../../helpers/common');

test.describe('DemoQA - Text Box Form', () => {

  test('Completar formulario Text Box correctamente', async ({ page }) => {

    // Navegar a DemoQA
    await page.goto('/text-box');

    // Completar campos
    await safeType(page, '#userName', userExample.name);
    await safeType(page, '#userEmail', userExample.email);
    await safeType(page, '#currentAddress', userExample.address);
    await safeType(page, '#permanentAddress', userExample.address);

    // Enviar formulario
    await safeClick(page, '#submit');

    // Validaciones
    await expect(page.locator('#output #name')).toContainText(userExample.name);
    await expect(page.locator('#output #email')).toContainText(userExample.email);
    await expect(page.locator('#output #currentAddress')).toContainText(userExample.address);

    // Evidencia
    const screenshotPath = await takeScreenshot(page, "textbox-form");
    console.log("Screenshot guardado en:", screenshotPath);
  });

});
