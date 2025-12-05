// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * FORMULARIO ESTABLE (ALTERNATIVA)
 * Página usada: https://www.techlistic.com/p/selenium-practice-form.html
 * Se guarda en /tests/forms/respaldo/ para NO mezclar con los test del reto.
 */

test('Practice Form - versión estable (respaldo)', async ({ page }) => {

  // 1. Abrir página alternativa ESTABLE
  await page.goto('https://www.techlistic.com/p/selenium-practice-form.html');

  // Garantiza que ya cargó el formulario
  await page.waitForTimeout(2000);

  // 2. Datos personales
  await page.locator("input[name='firstname']").fill('Liz');
  await page.locator("input[name='lastname']").fill('Vidal');

  // 3. Género
  await page.locator("#sex-1").check();

  // 4. Años de experiencia
  await page.locator("#exp-2").check();

  // 5. Fecha
  await page.locator("#datepicker").fill('12/12/2024');

  // 6. Profesión
  await page.locator("#profession-1").check();

  // 7. Herramienta
  await page.locator("#tool-2").check();

  // 8. Continente
  await page.locator("#continents").selectOption('South America');

  // 9. Selenium Commands
  await page.locator("#selenium_commands").selectOption('Navigation Commands');

  // 10. Screenshot automático
  const screenshotPath = `screenshots/practice-form-estable-${Date.now()}.png`;
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log('Screenshot automático guardado en:', screenshotPath);

  // 11. Verificación final
  await expect(page.locator("input[name='firstname']")).toBeVisible();
});
