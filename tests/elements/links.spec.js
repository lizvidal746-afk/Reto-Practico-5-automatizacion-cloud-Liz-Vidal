const { test, expect } = require('@playwright/test');

test('Validar códigos HTTP de los links', async ({ playwright }) => {

  // Crear contexto de API ignorando errores SSL
  const api = await playwright.request.newContext({
    ignoreHTTPSErrors: true
  });

  const linksToTest = [
    { id: 'created', expectedStatus: 201 },
    { id: 'no-content', expectedStatus: 204 },
    { id: 'moved', expectedStatus: 301 },
    { id: 'bad-request', expectedStatus: 400 },
    { id: 'unauthorized', expectedStatus: 401 },
    { id: 'forbidden', expectedStatus: 403 },
    { id: 'invalid-url', expectedStatus: 404 },
  ];

  for (const link of linksToTest) {
    const response = await api.get(`https://demoqa.com/${link.id}`);
    expect(response.status(), `Error en link: ${link.id}`).toBe(link.expectedStatus);
  }
});
