const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
  const info = await page.evaluate(() => {
    const h1 = document.querySelector('.home-hero h1');
    const r = h1.getBoundingClientRect();
    return { left: r.left, width: r.width, right: r.right };
  });
  console.log(JSON.stringify(info));
  await page.screenshot({ path: 'C:\Users\Cybta\AppData\Local\Temp\claude\c--Users-Cybta-Desktop-et-site\75af21b5-1d6c-4b6c-a09f-ae3c9f3b5b34\scratchpad\h1-maxwidth-1920.png', clip: { x: 0, y: 0, width: 1920, height: 700 } });
  await browser.close();
})();
