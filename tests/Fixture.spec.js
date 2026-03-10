// @ts-check
import { test, expect } from '@playwright/test';

/*
Difference between browser, context, and page in Playwright

Browser  → Represents the whole browser instance (Chromium, Firefox, WebKit).

Context  → Represents an isolated browser session, similar to an incognito window.
           Each context has separate cookies, storage, and login sessions.

Page     → Represents a single tab inside the browser context.
           Used to perform actions like navigation, click, fill, etc.

Hierarchy:
Browser → Context → Page
*/

test('has title', async ({ browserName }) => {

  console.log(browserName);

});

test('browser fixture', async ({ browser }) => {

  const context = await browser.newContext(); 
  const page = await context.newPage();

  await page.goto('https://example.com');

});

test('context fixture', async ({ context }) => {

  const page = await context.newPage(); 

  await page.goto('https://example.com');

});

test('login test', async ({ page }) => {
  await page.goto("https://example.com/login");
  await page.fill("#username", "admin");
  await page.fill("#password", "1234");
  await page.click("#login");
});