import { test, expect } from "@playwright/test";

test('Handle new tab', async ({ page, context }) => {

    // Step 1: Navigate to the application
    await page.goto("https://demoqa.com/browser-windows");

    // Step 2: Locate the "New Tab" button
    const newTabButton = page.getByRole('button', { name: 'New Tab' });

    // Step 3: Click button and wait for new tab to open
    // Promise.all is used to handle action + event together (avoids timing issues)
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),  // Wait for new tab
        newTabButton.click()           // Click action
    ]);

    // Step 4: Wait until new tab is fully loaded
    await newPage.waitForLoadState();

    // Step 5: Get title of new tab (may be empty if <title> is not defined)
    const title = await newPage.title();
    console.log("Title is:", title);

    // Step 6: Get visible text from new tab (best way to validate UI)
    const text = await newPage.locator('h1').textContent();
    console.log("Text is:", text);

    // Step 7: Validate text using assertion (important for testing)
    await expect(newPage.locator('h1')).toHaveText('This is a sample page');

    // Step 8: Close the new tab
    await newPage.close();

    // Step 9: Switch back to parent (original) page
    await page.bringToFront();

    // Step 10: Validate parent page URL
    const parentUrl = await page.url();
    console.log("Parent URL:", parentUrl);
});


test('Handle new window', async ({ page, context }) => {

    // Step 1: Navigate to application
    await page.goto("https://demoqa.com/browser-windows");

    // Step 2: Click "New Window" using text locator
    const [newWindow] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText('New Window', { exact: true }).click()
    ]);

    // Step 3: Wait for new window to load
    await newWindow.waitForLoadState();

    // Step 4: Validate content inside new window
    const text = await newWindow.locator('h1').textContent();
    console.log("Window Text:", text);

    await expect(newWindow.locator('h1')).toHaveText('This is a sample page');

    // Step 5: Close new window
    await newWindow.close();

    // Step 6: Switch back to parent page
    await page.bringToFront();

    console.log("Back to Parent URL:", await page.url());
});