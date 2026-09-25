const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
  const info = await page.evaluate(() => {
    const content = document.querySelector('.home-hero-content');
    const cs = getComputedStyle(content);
    return {
      maxWidth: cs.maxWidth, width: cs.width, marginLeft: cs.marginLeft, marginRight: cs.marginRight,
      paddingLeft: cs.paddingLeft, paddingRight: cs.paddingRight, justifySelf: cs.justifySelf,
      boxSizing: cs.boxSizing,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
