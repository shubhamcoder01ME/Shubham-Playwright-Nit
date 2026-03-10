// Importing required modules from Playwright
import { test, expect } from '@playwright/test';


// ============================
// Test 1: Click Actions
// ============================

test('Click action learning', async ({ page }) => {

  // Navigate to MakeMyTrip flights page
  await page.goto('https://www.makemytrip.com/flights/?cmp=SEM|M|DF|B|Brand|B_M_Makemytrip_Search_Exact|Brand_Top_5_Exact|Expanded|&s_kwcid=AL!1631!3!!e!!o!!makemytrip%5C%5C&ef_id=:G:s');

  // reload() ==> Used to refresh the current page
  await page.reload();


  // click() ==> Used to perform click action on elements


  // Example 1: Check if popup close button is visible, then click it
  const closebot = page.locator("//img[@alt='minimize']");

  // isVisible() ==> Checks whether the element is visible on the page
  if (await closebot.isVisible()) {
    await closebot.click();  // Click only if visible
  }


  // Example 2: Directly click the Search button
  const searchButton = page.locator('//a[text()="Search"]');

  await searchButton.click();  // Perform click action

});


// ============================
// Test 2: Checkbox Actions
// ============================

test('Checked action learning', async ({ page }) => {

  // Navigate to demo checkbox page
  await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0');


  // ----------------------------
  // Example 1: Select WhatsApp checkbox
  // ----------------------------

  // Locating WhatsApp checkbox using XPath
  const emailCheckbox = page.locator(
    '//span[text()="WhatsApp"]/preceding-sibling::input[@type="checkbox"]'
  );

  // check() ==> Selects the checkbox (only if not already checked)
  await emailCheckbox.check();

  // isChecked() ==> Verifies whether checkbox is selected
  if (await emailCheckbox.isChecked()) {
    console.log("WhatsApp checkbox is checked");
    await emailCheckbox.uncheck();
  } else {
    console.log("WhatsApp checkbox is NOT checked");
  }


  // ----------------------------
  // Example 2: Click and Uncheck Shoes checkbox
  // ----------------------------

  const shoesCheckbox = page.locator(
    '//span[text()="Shoes"]/preceding-sibling::input[@type="checkbox"]'
  );

  // click() ==> Toggles checkbox state
  await shoesCheckbox.click();

  // uncheck() ==> Unselects checkbox if it is checked
  await shoesCheckbox.uncheck();

  // Verify checkbox status
  if (await shoesCheckbox.isChecked()) {
    console.log("Shoes checkbox is checked");
  } else {
    console.log("Shoes checkbox is NOT checked");
  }


  // ----------------------------
  // Example 3: Verify all checkboxes are checked
  //            Count how many check box are present.
  // ----------------------------

const checkboxes = page.locator('input[type="checkbox"]');
const count = await checkboxes.count();
console.log('Total checkboxes:', count);

let allChecked = true;

for (let i = 0; i < count; i++) {
    await checkboxes.nth(i).check();

    // Verify checkbox is actually checked
    if (!(await checkboxes.nth(i).isChecked())) {
        allChecked = false;
    }
}

if (allChecked) {
    console.log('All checked ');
    await page.locator('//input[@type="submit"]').click();
} else {
    console.log('Not all checkboxes could be checked ');
}

// Navigate back
await page.goBack();

});


// ============================
// Test 2: Link Actions
// ============================

test('Link action learning', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui/link?sublist=0');

    //Write a script to Click On Link Text ?

    const link =page.locator('//a[@id="pay"]');
    await link.click();
    await page.waitForTimeout(3000);
    await page.goBack();


    //Write a script to get the text of all the links?

    const allLink=page.locator("//a[@id='ship']/../../..//a");
    const linkTexts = await allLink.allTextContents();
    console.log(linkTexts);

    //Write a script to Click on a Link text which open in new tab
    const linkNewTab=page.locator("//li[contains(@class, 'cursor-pointer') and contains(@class, 'poppins')]//a[text()='Link in New Tab']");

    await linkNewTab.click();
    await page.waitForTimeout(3000);
    await link.click();
    await page.goBack();

});

test('Link action learning', async ({ page }) => {

});