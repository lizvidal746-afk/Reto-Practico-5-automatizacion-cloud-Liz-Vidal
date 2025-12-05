exports.blockAds = async (page) => {
  await page.route('**/*', (route) => {
    const url = route.request().url();

    const blockedPatterns = [
      'doubleclick.net',
      'googlesyndication.com',
      'adservice.google.com',
      'ads',
      'banner',
      'promo',
      'tracking',
      'praris'
    ];

    // Bloquear si coincide con algún patrón
    if (blockedPatterns.some(pattern => url.includes(pattern))) {
      return route.abort();
    }

    return route.continue();
  });
};
