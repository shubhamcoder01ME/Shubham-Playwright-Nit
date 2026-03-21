import {test,expect} from '@playwright/test';


test('handle confirmation alert',async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.waitForTimeout(3000);
    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        console.log(dialog.defaultValue());
        await dialog.accept();
    })
    await page.locator("//button[contains(text(),'click the button to display an')]").click();
    await page.waitForTimeout(3000);

});


test('handle YES or NO alert',async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.waitForTimeout(3000);
    await page.locator(".analystic[href='#CancelTab']").click();
    await page.waitForTimeout(3000);

    page.on('dialog',async alert=>{
       const msg= alert.message()
       console.log (msg);
       console.log(alert.type());
       await expect(msg).toContain("Button");
       await alert.accept();

    })
    await page.locator('.btn.btn-primary').click();
    await page.waitForTimeout(3000);

});



test('handle promt alert',async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.waitForTimeout(3000);
    await page.locator(".analystic[href='#Textbox']").click();
    await page.waitForTimeout(3000);

    page.on('dialog',async alert=>{
       const msg= alert.message()
       console.log (msg);
       const type =alert.type();
       console.log(type);
       const defaultvalue=alert.defaultValue();
       console.log(defaultvalue);
       await expect(msg).toContain("name");
       await alert.accept("abcsefghi");

    })
    await page.locator('.btn.btn-info').click();
    await page.waitForTimeout(3000);

});