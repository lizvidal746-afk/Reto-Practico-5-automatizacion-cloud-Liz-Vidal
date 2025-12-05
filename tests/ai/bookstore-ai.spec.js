const { test, expect } = require('@playwright/test');
const { findElementWithRepair } = require('../../helpers/autoRepair');

test('AI Auto-Repair — Book Store', async ({ page }) => {

  // 1. Ir al Book Store
  await page.goto('/books');

  // 2. Intentar encontrar libro usando AUTO-REPAIR
  const selectors = [
    '#title-wrapper',                          // selector principal
    'a:has-text("Git Pocket Guide")',          // RESERVA
    'text=Git Pocket Guide',                   // fallback
    '[href*="9781449325862"]'                  // último recurso
  ];

  const title = await findElementWithRepair(
    page,
    selectors,
    'Libro Git Pocket Guide'
  );

  await expect(title).toBeVisible();

  // 3. Captura evidencia
  await page.screenshot({
    path: 'evidencias/bookstore-ai.png',
    fullPage: true
  });
});
