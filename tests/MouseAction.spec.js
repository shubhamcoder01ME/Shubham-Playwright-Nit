import {expect,test} from '@playwright/test';


test('mouse action',async ({page})=>{

    await page.goto("https://demoqa.com/buttons");

    const result=page.locator("#dynamicClickMessage");

    //left click
    const button=page.locator("(//button[normalize-space()='Click Me'])[1]");
    await button.click();

    console.log(await result.textContent());

    //right click
    const button2=page.locator("#rightClickBtn");
    await button2.click({button:'right'});

    console.log(await result.textContent());

    //doble click
    const button3= page.locator("#doubleClickBtn");
    await button3.dblclick();

    console.log(await result.textContent());



});

test('mouse hover and drop and drag',async ({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0");


    //mouse hover 
    const icon=page.locator(".w-5.h-5.mt-5.ml-3.cursor-pointer");
    await icon.hover();
    
    const information=page.locator('//ul[@class="p-4"]');
    const text=await information.allInnerTexts();
    console.log(text);


    //drag and drop
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");

    //first way using dragAndDrop method
    await page.dragAndDrop("//div[normalize-space()='Mobile Charger']","(//div)[19]");
    await page.waitForTimeout(3000);

    //second way using mouse action
    const source=page.getByText('Laptop Cover');
    const target=page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section:nth-child(1) > main:nth-child(2) > section:nth-child(1) > article:nth-child(1) > aside:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2)");

    await source.hover();
    await page.mouse.down();
    await target.hover();
    await page.mouse.up();

})