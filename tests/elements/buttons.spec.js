const { test, expect } = require('@playwright/test');
const { takeScreenshot } = require('../../helpers/common');

test.describe('DemoQA - Buttons', () => {

  test('Validar Double Click, Right Click y Click Me', async ({ page }) => {

    await page.goto('/buttons');

    // 1. Double click
    const doubleClickBtn = page.locator('#doubleClickBtn');
    await doubleClickBtn.dblclick();
    await expect(page.locator('#doubleClickMessage')).toHaveText(/You have done a double click/);

    // 2. Right click
    const rightClickBtn = page.locator('#rightClickBtn');
    await rightClickBtn.click({ button: 'right' });
    await expect(page.locator('#rightClickMessage')).toHaveText(/You have done a right click/);

    // 3. Normal click (Click Me)
    const clickMeBtn = page.getByRole('button', { name: 'Click Me', exact: true });
    await clickMeBtn.click();
    await expect(page.locator('#dynamicClickMessage')).toHaveText(/You have done a dynamic click/);

    // Screenshot final
    await takeScreenshot(page, "buttons");
  });

});

