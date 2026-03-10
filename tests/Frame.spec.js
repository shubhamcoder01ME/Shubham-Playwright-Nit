import {test,expect} from '@playwright/test'

test('how to handle frame',async({page})=>{
    //Write a script to handle frames in a webpage?

    await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0");
    const frame=await page.locator(".w-full.h-96");
    await page.locator("#username").fill("user123");
});

test('how to handle Single frame',async({page})=>{
    //Write a script to handle frames in a webpage?

    await page.goto("https://demo.automationtesting.in/Frames.html");

    // page.frame() does not accept CSS selector (#singleframe). 
    // It only works with: name attribute url frame object

    // get frame using name
    const frame = page.frame({ name: "SingleFrame" });
    await frame.locator("input[type='text']").fill("user123");
    // get frame using url
    const frame2 = page.frame({ url: /SingleFrame.html/ });
    await frame2.locator("input[type='text']").fill("user003");

    const frameele=page.frameLocator("#singleframe").locator("input[type='text']");
    await expect(frameele).toBeEditable();
});

test('how to handle nested frame',async({page})=>{
    //Write a script to handle nested frames in a webpage?

    await page.goto("https://demo.automationtesting.in/Frames.html");

    await page.locator(".analystic[href='#Multiple']").click();
    const parentFrame=page.frameLocator("iframe[src='MultipleFrames.html']");
    const childFrame=parentFrame.frameLocator("iframe[src='SingleFrame.html']");
    const element=childFrame.locator("input[type='text']");
    await element.fill("12555");
});

test('how to print no of frames',async({page})=>{
    //Write a script to coumt the number of frames in a webpage?

     await page.goto("https://demo.automationtesting.in/Frames.html");

   const frames = page.frames();

   console.log("Total Frames:", frames.length);

   for (const frame of frames) {

    console.log("Frame Name:", frame.name());
    console.log("Frame URL:", frame.url());

    // Skip main page frame
    if (frame === page.mainFrame()) {
        continue;
    }

    const element = await frame.frameElement();
    const nameAttr = await element.getAttribute("name");

    console.log("Frame Attribute (name):", nameAttr);
    }
});