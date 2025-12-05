import { test, expect } from '@playwright/test';

test.describe('DemoQA - Alerts', () => {

  test('Validar alertas básicas y con confirmación', async ({ page }) => {

    // 🔥 FIX obligatorio para que DemoQA permita ejecutar alert()
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'webdriver', {
        get: () => false
      });
    });

    // 1. Ir a Alerts
    await page.goto('https://demoqa.com/alerts', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page.locator('h1')).toContainText('Alerts');

    // 2. ALERTA SIMPLE
    const alert1Promise = page.waitForEvent('dialog');
    await page.click('#alertButton');
    const alert1 = await alert1Promise;
    await alert1.accept();

    // 3. ALERTA RETARDADA
    const alert2Promise = page.waitForEvent('dialog');
    await page.click('#timerAlertButton');
    const alert2 = await alert2Promise;
    await alert2.accept();

    // 4. CONFIRM ALERT
    const confirmPromise = page.waitForEvent('dialog');
    await page.click('#confirmButton');
    const confirmDialog = await confirmPromise;
    await confirmDialog.accept();
    await expect(page.locator('#confirmResult')).toContainText('You selected Ok');

    // 5. PROMPT ALERT
    const promptPromise = page.waitForEvent('dialog');
    await page.click('#promtButton');
    const promptDialog = await promptPromise;
    await promptDialog.accept('Liz');
    await expect(page.locator('#promptResult')).toContainText('Liz');

  });

});



