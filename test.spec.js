// // const { chromium } = require('playwright');
// // const { test, expect, describe } = require('@playwright/test');

// // //search in google
// // //store search result
// // //


// // describe('Google Login Test', () => {
// //   let browser;
// //   let context;
// //   let page;

// //   beforeAll(async () => {
// //     browser = await chromium.launch({ headless: false });
// //     context = await browser.newContext();
// //     page = await context.newPage();
// //   });

// //   afterAll(async () => {
// //     await browser.close();
// //   });

// // //   (//div[@class="MjjYud"][1])//a[@jsname="UWckNb"]

// //   test('should navigate to Google login page', async () => {
// //     await page.goto('https:google.com/');
// //     // await page.fill("textarea[name='q']",'Playwright');
// //     // await page.click("(//*[@value='Google Search'])[1]");
// //     // Perform a search
// //   const searchTerm = 'Playwright automation';
// //   await page.fill('input[name="q"]', searchTerm);
// //   await page.keyboard.press('Enter');

// //   // Wait for search results to load
// //   await page.waitForSelector('h3');

// //   // Get the first 5 URLs from the search results
// //   const urls = await page.evaluate(() => {
// //     const links = Array.from(document.querySelectorAll('a h3')).slice(0, 5);
// //     return links.map(link => link.parentElement.href);
// //   });

// //   console.log('First 5 URLs:', urls);
// //   });

// // //   test('should enter email and navigate to password input', async () => {
// // //     await page.fill('input[type="email"]', 'your-email@gmail.com');
// // //     await page.click('button:has-text("Next")');
// // //     await page.waitForSelector('input[type="password"]', { visible: true });
// // //   });

// // });
// const { test, expect } = require('@playwright/test');
// const { chromium } = require('playwright');
// test.describe('Google Search', () => {
//   let browser;
//   let context;
//   let page;

//   test.beforeAll(async ({  }) => {
//     browser = await chromium.launch({ headless: false });
//     context = await browser.newContext();
//     page = await context.newPage();
//     await page.goto('https://www.google.com/');
//   });

//   test.afterAll(async () => {
//     // await browser.close();
//   });

//   // test('should search for a term and get the first 5 URLs', async () => {
//   //   await page.goto('https://www.google.com');

//   //   // Accept cookies if prompted (common for European users)
//   //   const acceptButton = await page.$('button:has-text("I agree")');
//   //   if (acceptButton) {
//   //     await acceptButton.click();
//   //   }

//   //   // Perform a search
//   //   const searchTerm = 'Playwright automation';
//   //   await page.fill('input[name="q"]', searchTerm);
//   //   await page.keyboard.press('Enter');

//   //   // Wait for search results to load
//   //   await page.waitForSelector('h3');

//   //   // Get the first 5 URLs from the search results
//   //   const urls = await page.evaluate(() => {
//   //     const links = Array.from(document.querySelectorAll('a h3')).slice(0, 5);
//   //     return links.map(link => link.parentElement.href);
//   //   });

//   //   console.log('First 5 URLs:', urls);

//   //   // Assertions to ensure at least 5 URLs are retrieved
//   //   expect(urls.length).toBe(5);
//   // });
//   // import { test, expect } from '@playwright/test';

//   // test('test', async ({ page }) => {
//     // await page.waitForSelector("(//input[@value='Google Search'])[1]");
//     await page.goto('https://www.google.com/search?q=playwright&sca_esv=0a19aeac39eab32d&source=hp&ei=fkJVZofwI8GS4-EPs9u8iAM&iflsig=AL9hbdgAAAAAZlVQjnScqaiAOLSRmS1aeU-pr1XWRZOw&ved=0ahUKEwiHp4Cvp6-GAxVByTgGHbMtDzEQ4dUDCA0&uact=5&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEAmAIAoAIAmAMAkgcAoAcA&sclient=gws-wiz');
//     await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
//     await page.getByRole('navigation').first().click();
//     // await page.getByRole('link', { name: 'microsoft/playwright GitHub' }).click();
//   });
// });


const { chromium } = require('playwright');
const { test, expect, describe } = require('@playwright/test');

describe('Google Login Test', () => {
  let browser;
  let context;
  let page;

  // beforeAll(async () => {
  //   browser = await chromium.launch({ headless: false });
  //   context = await browser.newContext();
  //   page = await context.newPage();
  // });

  // afterAll(async () => {
  //   await browser.close();
  // });

  test('should navigate to Google login page', async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://accounts.google.com/');
    // expect(await page.title()).toBe('Sign in – Google accounts');
  });

  // test('should enter email and navigate to password input', async () => {
  //   await page.fill('input[type="email"]', 'your-email@gmail.com');
  //   await page.click('button:has-text("Next")');
  //   await page.waitForSelector('input[type="password"]', { visible: true });
  // });

  // test('should enter password and log in', async () => {
  //   await page.fill('input[type="password"]', 'your-password');
  //   await page.click('button:has-text("Next")');
  //   await page.waitForNavigation();
  //   // Verify successful login, e.g., by checking URL or a specific element
  //   const url = page.url();
  //   expect(url).toContain('myaccount.google.com');
  // });
});
