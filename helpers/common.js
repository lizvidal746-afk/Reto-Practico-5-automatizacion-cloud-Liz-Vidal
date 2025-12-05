const path = require('path');

// Delay simple para depuración
exports.delay = (ms) => new Promise(res => setTimeout(res, ms));

// Clic seguro
exports.safeClick = async (page, selector) => {
  await page.waitForSelector(selector, { state: 'visible' });
  await page.click(selector);
};

// Escribir seguro
exports.safeType = async (page, selector, text) => {
  await page.waitForSelector(selector, { state: 'visible' });
  await page.fill(selector, text);
};

// Generar nombre de archivo único
exports.uniqueName = (prefix = "capture") => {
  const timestamp = Date.now();
  return `${prefix}_${timestamp}.png`;
};

// Screenshot manual controlado por el test
exports.takeScreenshot = async (page, prefix = "test") => {
  const fileName = exports.uniqueName(prefix);
  const filePath = path.join("screenshots", fileName);
  await page.screenshot({ path: filePath });
  return filePath;
};
