const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
  const info = await page.evaluate(() => {
    const content = document.querySelector('.home-hero-content');
    const hero = document.querySelector('.home-hero');
    const cs = getComputedStyle(content);
    const r = content.getBoundingClientRect();
    const heroR = hero.getBoundingClientRect();
    return {
      heroWidth: heroR.width,
      contentRect: { left: r.left, width: r.width, right: r.right },
      maxWidth: cs.maxWidth, width: cs.width, marginLeft: cs.marginLeft, marginRight: cs.marginRight,
      display: cs.display, gridColumn: cs.gridColumn, justifySelf: cs.justifySelf,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
