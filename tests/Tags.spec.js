// # Run only smoke tests
// npx playwright test --grep "@smoke"

// # Run only regression tests
// npx playwright test --grep "@regression"

// # Run both
// npx playwright test --grep "@smoke|@regression"

// # Exclude smoke
// npx playwright test --grep-invert "@smoke"

import { test, expect } from "@playwright/test";

// Smoke Test
test('Login - valid user - should login successfully @smoke', async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page).toHaveTitle(/Example/);
});

// Regression Test
test('Signup - new user - should load signup page @regression', async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page).toHaveURL("https://example.com/");
});

// Smoke + Regression Test
test('Payment - process payment - should complete successfully @smoke @regression', async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page.locator('h1')).toHaveText('Example Domain');
});

// Grouped Tests with Tag
test.describe('Checkout Module @smoke', () => {

    test('Add to cart - item should be added', async ({ page }) => {
        await page.goto("https://example.com");
        await expect(page).toHaveTitle(/Example/);
    });

    test('Place order - order should be successful', async ({ page }) => {
        await page.goto("https://example.com");
        await expect(page.locator('h1')).toHaveText('Example Domain');
    });

});