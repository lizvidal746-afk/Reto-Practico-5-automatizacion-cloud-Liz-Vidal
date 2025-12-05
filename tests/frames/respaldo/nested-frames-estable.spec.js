const { test, expect } = require('@playwright/test');

test.describe('Respaldo - Nested Frames (Página Estable)', () => {

  test('Validar contenido entre Frame Padre e Hijo en página estable', async ({ page }) => {

    // 1. Navegar a la página oficial
    await page.goto('https://demoqa.com/nestedframes');

    // 2. Acceder al frame padre
    const parentFrame = page.frameLocator('iframe#frame1');

    // 3. Obtener texto del body del frame padre
    const parentText = await parentFrame.locator('body').textContent();

    console.log('Texto Frame Padre:', parentText);

    expect(parentText).toContain('Parent frame');

    // 4. Acceder al frame hijo dentro del frame padre
    const childFrame = parentFrame.frameLocator('iframe');

    // 5. Obtener texto del body del frame hijo
    const childText = await childFrame.locator('body').textContent();

    console.log('Texto Frame Hijo:', childText);

    expect(childText).toContain('Child Iframe');

  });

});
