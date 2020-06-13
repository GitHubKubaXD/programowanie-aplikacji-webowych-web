// potrzebne pakiety:
// npm i puppeteer
// npm i @types/puppeteer
// npm i puppeteer-tsd

// uruchomienie
// 1) build projektu
// 2) node index.test.ts z katalogu build

import * as puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

// describe('Google', () => {
//   beforeAll(async () => {
//     await page.goto('https://google.com');
//   });

//   it('should be titled "Google"', async () => {
//     await expect(page.title()).resolves.toMatch('Google');
//   });
// });