const fs = require('fs');

async function findElementWithRepair(page, selectors, label) {

  for (const selector of selectors) {
    try {
      const element = page.locator(selector);

      if (await element.count() > 0) {

        console.log(`✅ Selector funcionando: ${selector}`);
        saveLog(`OK  → ${label}: ${selector}`);
        return element;

      }

    } catch (error) {
      // continúa al siguiente selector
    }
  }

  saveLog(`FAIL → ${label}: ningún selector funcionó`);
  throw new Error(`Auto-repair NO encontró el elemento: ${label}`);
}


// -----------------------------

function saveLog(message) {

  const path = 'reportes/ai-repair-log.txt';

  const time = new Date().toISOString();
  const entry = `[${time}] ${message}\n`;

  if (!fs.existsSync('reportes')){
    fs.mkdirSync('reportes');
  }

  fs.appendFileSync(path, entry);

}


module.exports = {
  findElementWithRepair
};
