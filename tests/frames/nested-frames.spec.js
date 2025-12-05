const { test, expect } = require('@playwright/test');

test.describe('DemoQA - Nested Frames', () => {

  test('Validar contenido entre Frame Padre e Hijo', async ({ page }) => {

    // 1. Ir a Nested Frames
    await page.goto('https://demoqa.com/nestedframes', { timeout: 20000 });

    // 2. Esperar a que exista al menos 1 iframe en el DOM
    await page.waitForSelector('iframe', { timeout: 15000 });

    // 3. Obtener el frame padre (primer iframe)
    const frames = page.frames();
    const parentFrame = frames.find(f => f.url().includes('nestedframes'));

    expect(parentFrame).not.toBeNull();

    // 4. Dentro del frame padre localizar el elemento <body>
    const parentBody = parentFrame.locator('body');
    const parentText = await parentBody.textContent();
    expect(parentText).toContain('Parent frame');

    // 5. Obtener el frame hijo dentro del padre
    const childFrame = parentFrame.childFrames()[0];
    expect(childFrame).not.toBeNull();

    const childText = await childFrame.locator('p').textContent();
    expect(childText).toContain('Child Iframe');

    console.log("Texto en Frame Padre:", parentText);
    console.log("Texto en Frame Hijo:", childText);
  });

});
