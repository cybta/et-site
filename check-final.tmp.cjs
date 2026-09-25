const { chromium } = require('playwright');

const desktopSizes = [[1280,720],[1366,768],[1600,900],[1920,1080]];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const [w,h] of desktopSizes) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(150);
    const info = await page.evaluate(() => {
      const h1 = document.querySelector('.home-hero h1');
      const r = h1.getBoundingClientRect();
      return {
        scrollH: document.documentElement.scrollHeight,
        innerH: window.innerHeight,
        overflow: document.documentElement.scrollHeight > window.innerHeight,
        h1Left: r.left, h1Width: r.width,
      };
    });
    console.log('desktop', w, h, JSON.stringify(info));
  }

  // compare X alignment vs Solutions page at a large width
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  const homeLeft = await page.evaluate(() => document.querySelector('.home-hero h1').getBoundingClientRect().left);
  await page.goto('http://localhost:5173/solutions', { waitUntil: 'networkidle' });
  const solLeft = await page.evaluate(() => document.querySelector('.page-hero h1').getBoundingClientRect().left);
  console.log('home h1 left', homeLeft, 'solutions h1 left', solLeft);

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
  await page.screenshot({ path: 'C:\\Users\\Cybta\\AppData\\Local\\Temp\\claude\\c--Users-Cybta-Desktop-et-site\\75af21b5-1d6c-4b6c-a09f-ae3c9f3b5b34\\scratchpad\\final-1920.png', clip: { x: 0, y: 0, width: 1920, height: 700 } });

  const phones = [
    { name: 'iphone-se', width: 375, height: 667 },
    { name: 'iphone-16-pro-max', width: 430, height: 932 },
  ];
  for (const c of phones) {
    const context = await browser.newContext({ viewport: { width: c.width, height: c.height }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    const p = await context.newPage();
    await p.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await p.waitForTimeout(150);
    const info = await p.evaluate(() => ({ scrollH: document.documentElement.scrollHeight, innerH: window.innerHeight }));
    console.log(c.name, JSON.stringify(info));
    await context.close();
  }

  await browser.close();
})();
