const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
  const info = await page.evaluate(() => {
    const hero = document.querySelector('.home-hero');
    const content = document.querySelector('.home-hero-content');
    const h1 = document.querySelector('.home-hero h1');
    return {
      heroCols: getComputedStyle(hero).gridTemplateColumns,
      heroRows: getComputedStyle(hero).gridTemplateRows,
      contentWidth: content.getBoundingClientRect().width,
      h1Width: h1.getBoundingClientRect().width,
      h1Left: h1.getBoundingClientRect().left,
      h1MaxWidth: getComputedStyle(h1).maxWidth,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
