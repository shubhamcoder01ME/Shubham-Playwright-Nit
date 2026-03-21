import { test, expect } from "@playwright/test";

test('File Upload - verify upload success', async ({ page }) => {

    // Step 1: Navigate to upload page
    await page.goto("https://the-internet.herokuapp.com/upload");

    // Step 2: Upload file from your project folder
    await page.setInputFiles('#file-upload', 'Test-Data/file.txt');

    // Step 3: Click upload button
    await page.click('#file-submit');

    // Step 4: Validate upload success message
    await expect(page.locator('h3')).toHaveText('File Uploaded!');

    // Step 5: Validate uploaded file name
    await expect(page.locator('#uploaded-files')).toHaveText('file.txt');

});


test('Upload multiple files', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.setInputFiles('#file-upload', [
        'Test-Data/ile1.txt',
        'Test-Data/ile2.txt'
    ]);

    await page.click('#file-submit');

    await expect(page.locator('h3')).toHaveText('File Uploaded!');
});