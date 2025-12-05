const { test, expect } = require('@playwright/test');

test.describe('DemoQA - Frames', () => {

  test('Validar textos dentro de iframes', async ({ page }) => {

    await page.goto('https://demoqa.com/frames', { timeout: 60000 });

    // ---- FRAME 1 ----
    const frame1 = page.frame({ name: 'frame1' });
    const title1 = await frame1.locator('#sampleHeading').textContent();

    expect(title1).toBe('This is a sample page');

    // ---- FRAME 2 ----
    const frame2 = page.frame({ name: 'frame2' });
    const title2 = await frame2.locator('#sampleHeading').textContent();

    expect(title2).toBe('This is a sample page');

    // Screenshot
    await page.screenshot({
      path: `screenshots/frames-${Date.now()}.png`
    });

  });

});
