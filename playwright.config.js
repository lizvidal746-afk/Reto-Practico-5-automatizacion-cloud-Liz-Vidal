// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'reportes/html-report', open: 'never' }]
  ],

  use: {
    baseURL: 'https://demoqa.com',

    // 🔥 FIX para poder usar alerts en DemoQA
    headless: false,
    launchOptions: {
      args: ['--disable-blink-features=AutomationControlled']
    },

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 }
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'Webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});
