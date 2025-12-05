const { test, expect } = require('@playwright/test');

test('Practice Form - fallback automático: DemoQA -> alternativa estable', async ({ page }) => {

  // ✅ Página principal
  await page.goto('/automation-practice-form');
  await page.waitForLoadState('domcontentloaded');

  // ✅ Ocultar anuncios interferentes
  await page.addStyleTag({
    content: `
      #fixedban,
      iframe {
        display: none !important;
      }
    `
  });

  // ---------
  // FORMULARIO
  // ---------

  await page.fill('#firstName', 'Auto');
  await page.fill('#lastName', 'Repair');
  await page.fill('#userEmail', 'auto@repair.com');

  // Género
  await page.locator('label[for="gender-radio-1"]').click({ force: true });

  await page.fill('#userNumber', '9999999999');

  // ✅ Hobbies - Click estable
  await page.locator('label[for="hobbies-checkbox-1"]').click({ force: true });

  // Upload
  await page.setInputFiles('#uploadPicture', 'package.json');

  // Dirección
  await page.fill('#currentAddress', 'Fallback Street 123');

  // ✅ Estado - React Select estable
  await page.locator('#state').click({ force: true });
  await page.keyboard.type('NCR');
  await page.keyboard.press('Enter');

  // ✅ Ciudad - React Select estable
  await page.locator('#city').click({ force: true });
  await page.keyboard.type('Delhi');
  await page.keyboard.press('Enter');

  // Enviar formulario
  await page.locator('#submit').click({ force: true });

  // -----------------------
  // VALIDACIÓN FINAL
  // -----------------------

  const modalTitle = page.locator('#example-modal-sizes-title-lg');
  await expect(modalTitle).toBeVisible();
  await expect(modalTitle).toHaveText('Thanks for submitting the form');

});

