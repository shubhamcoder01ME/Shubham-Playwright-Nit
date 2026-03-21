import { test, expect } from "@playwright/test";


// 🔹 Runs once before all tests
test.beforeAll(async () => {
    console.log("Before All - Start of test suite");
});


// 🔹 Runs before each test
test.beforeEach(async ({ page }) => {
    await page.goto("https://example.com");
    console.log("Before Each - Opened website");
});


// Test 1
test('Check title', async ({ page }) => {
    const title = await page.title();
    console.log("Title:", title);

    await expect(page).toHaveTitle(/Example/);
});


// Test 2
test('Check heading text', async ({ page }) => {
    const text = await page.locator('h1').textContent();
    console.log("Heading:", text);

    await expect(page.locator('h1')).toHaveText('Example Domain');
});


// Test 3
test('Check URL', async ({ page }) => {
    const url = page.url();
    console.log("URL:", url);

    await expect(page).toHaveURL("https://example.com/");
});


// Runs after each test
test.afterEach(async () => {
    console.log("After Each - Test completed");
});


// Runs once after all tests
test.afterAll(async () => {
    console.log("After All - End of test suite");
});