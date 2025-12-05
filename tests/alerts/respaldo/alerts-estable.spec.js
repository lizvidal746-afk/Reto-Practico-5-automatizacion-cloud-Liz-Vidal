const { test, expect } = require('@playwright/test');

test.describe('Respaldo - Alerts (Página Estable Real)', () => {

  test('Validar alert, confirm y prompt', async ({ page }) => {

    await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');

    // ============================
    // 1. ALERTA SIMPLE
    // ============================

    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('I am an alert box!');
      await dialog.accept();
    });

    await page.click('#alertexamples');


    // ============================
    // 2. CONFIRM() — Texto actualizado
    // ============================

    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      expect(dialog.message()).toContain('I am a confirm alert');   // ← texto real
      await dialog.accept();
    });

    await page.click('#confirmexample');

    await expect(page.locator('#confirmreturn')).toHaveText('true');


    // ============================
    // 3. PROMPT()
    // ============================

    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      await dialog.accept('Liz Tester');
    });

    await page.click('#promptexample');

    await expect(page.locator('#promptreturn')).toHaveText('Liz Tester');
  });
});

