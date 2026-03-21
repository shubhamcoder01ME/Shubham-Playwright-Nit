import { test, expect, chromium } from "@playwright/test";


//Hooks are functions used to run setup and teardown logic before or after tests.

/*
Types of hooks?
               beforeAll
               beforeEach
               afterEach
                afterAll
*/
let browser;
let context;
let page;

// Runs once before all tests
test.beforeAll(async () => {
    // Launch browser
    browser = await chromium.launch({ headless: false });

    // Create browser context
    context = await browser.newContext();

    // Open new page
    page = await context.newPage();

    console.log("Browser, context and page initialized");
});

// Runs before each test
test.beforeEach(async () => {
    // Navigate to application
    await page.goto("https://example.com");

    console.log("Navigated to application");
});

// Test 1: Validate page title
test('Validate title', async () => {
    const title = await page.title();
    console.log("Title:", title);

    await expect(page).toHaveTitle(/Example/);
});

// Test 2: Validate heading text
test('Validate heading', async () => {
    const heading = await page.locator('h1').textContent();
    console.log("Heading:", heading);

    await expect(page.locator('h1')).toHaveText('Example Domain');
});

// Test 3: Validate page URL
test('Validate URL', async () => {
    const url = page.url();
    console.log("URL:", url);

    await expect(page).toHaveURL("https://example.com/");
});

// Runs once after all tests
test.afterAll(async () => {
    // Close page, context and browser
    await page.close();
    await context.close();
    await browser.close();

    console.log("Browser closed");
});