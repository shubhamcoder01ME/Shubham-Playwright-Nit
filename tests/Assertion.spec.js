import { test, expect } from "@playwright/test";

test('Hard Assertion Example', async ({ page }) => {

    await page.goto("https://example.com");

    // Step 1: Validate title (Hard assertion)
    await expect(page).toHaveTitle("Wrong Title");  // This will fail

    // Step 2: This line will NOT execute
    console.log("This will not be printed");
});


test('Upload multiple files - working example', async ({ page }) => {

    // Step 1: Open the page
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_multiple");

    // Step 2: Switch to iframe
    const frame = page.frameLocator('#iframeResult');

    // Step 3: Upload multiple files
    await frame.locator('input[type="file"]').setInputFiles([
        'Test-Data/ile1.txt',
        'Test-Data/ile2.txt'
    ]);

    // Step 4: Validate files selected (optional check)
    const files = await frame.locator('input[type="file"]').evaluate(el => el.files.length);
    console.log("Number of files uploaded:", files);

    // Assertion
    expect(files).toBe(2);
});
