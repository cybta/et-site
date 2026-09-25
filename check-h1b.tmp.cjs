const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
  const info = await page.evaluate(() => {
    const h1 = document.querySelector('.home-hero h1');
    const content = document.querySelector('.home-hero-content');
    const cs = getComputedStyle(h1);
    const ccs = getComputedStyle(content);
    return {
      h1: { marginLeft: cs.marginLeft, marginRight: cs.marginRight, alignSelf: cs.alignSelf, textAlign: cs.textAlign, width: cs.width, maxWidth: cs.maxWidth },
      content: { alignItems: ccs.alignItems, justifyContent: ccs.justifyContent, left: content.getBoundingClientRect().left, width: content.getBoundingClientRect().width },
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
