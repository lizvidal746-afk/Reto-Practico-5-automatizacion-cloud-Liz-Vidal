const { test, expect } = require('@playwright/test');

test('Practice Form - completar y verificar modal', async ({ page }) => {

  // -----------------------------
  // Navegación
  // -----------------------------
  await page.goto('https://demoqa.com/automation-practice-form');

  // ✅ Bloquear elementos que rompen clics
  await page.evaluate(() => {
    const fixedBan = document.getElementById('fixedban');
    if (fixedBan) fixedBan.remove();

    document.querySelectorAll("iframe").forEach(i => i.remove());
  });

  // -----------------------------
  // Formulario
  // -----------------------------

  await page.fill('#firstName', 'Liz');
  await page.fill('#lastName', 'Vidal');
  await page.fill('#userEmail', 'liz@test.com');

  // Género
  await page.click('label[for="gender-radio-2"]', { force: true });

  // Teléfono
  await page.fill('#userNumber', '999888777');

  // Cerrar calendario
  await page.click('#dateOfBirthInput', { force: true });
  await page.keyboard.press('Escape');

  // ✅ Hobbies
  await page.locator('#hobbies-checkbox-1').click({ force: true });

  // Archivo
  await page.setInputFiles('#uploadPicture', 'package.json');

  // Dirección
  await page.fill('#currentAddress', 'Lima - Perú');

  // -----------------------------
  // ✅ State and City robusto
  // -----------------------------

  await page.locator('#state').click({ force: true });

  await page
    .locator('div[id^="react-select-3-option"]')
    .first()
    .waitFor({ state: 'visible', timeout: 15000 });

  await page
    .locator('div[id^="react-select-3-option"]')
    .first()
    .click({ force: true });

  await page.locator('#city').click({ force: true });

  await page
    .locator('div[id^="react-select-4-option"]')
    .first()
    .waitFor({ state: 'visible', timeout: 15000 });

  await page
    .locator('div[id^="react-select-4-option"]')
    .first()
    .click({ force: true });

  // -----------------------------
  // Submit
  // -----------------------------

  await page.click('#submit', { force: true });

  // -----------------------------
  // ✅ VALIDACIÓN FINAL ESTABLE
  // -----------------------------

  const modalTitle = page.locator('#example-modal-sizes-title-lg');

  await expect(modalTitle).toBeVisible({ timeout: 15000 });

  await expect(modalTitle).toHaveText('Thanks for submitting the form');

});





