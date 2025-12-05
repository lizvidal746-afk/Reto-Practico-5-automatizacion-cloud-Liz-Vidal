const { test, expect } = require('@playwright/test');
const { safeType, safeClick, takeScreenshot } = require('../../helpers/common');

test.describe('DemoQA - Web Tables', () => {

  test('Agregar, buscar, editar y eliminar un registro', async ({ page }) => {

    await page.goto('/webtables');

    // Datos para el test
    const firstName = 'Liz';
    const lastName = 'Vidal';
    const email = 'liz.vidal@test.com';
    const age = '28';
    const salary = '9000';
    const department = 'QA';

    // 1. Agregar nuevo registro
    await safeClick(page, '#addNewRecordButton');
    await safeType(page, '#firstName', firstName);
    await safeType(page, '#lastName', lastName);
    await safeType(page, '#userEmail', email);
    await safeType(page, '#age', age);
    await safeType(page, '#salary', salary);
    await safeType(page, '#department', department);
    await safeClick(page, '#submit');

    // Validar que aparece en la tabla
    await expect(page.locator('.rt-tbody')).toContainText(firstName);

    // 2. Buscar el registro
    await safeType(page, '#searchBox', firstName);
    await expect(page.locator('.rt-tbody')).toContainText(firstName);

    // 3. Editar un campo del registro
    await safeClick(page, 'span[title="Edit"]');
    await page.fill('#department', 'Automation');
    await safeClick(page, '#submit');

    await expect(page.locator('.rt-tbody')).toContainText('Automation');

    // 4. Eliminar el registro
    await safeClick(page, 'span[title="Delete"]');

    // Validar que ya no aparece
    await expect(page.locator('.rt-tbody')).not.toContainText(firstName);

    // Evidencia final
    await takeScreenshot(page, "webtables-complete");
  });

});
