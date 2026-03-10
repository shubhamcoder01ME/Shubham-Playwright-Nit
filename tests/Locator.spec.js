
/*

   //textarea[@id="APjFqb"]   ==>A element Locator


   //textarea[@id="APjFqb"]/..  (/..)==>It will highlight immidiate parent of A Element


   //textarea[@id="APjFqb"]/../../div  (/div)==>It will highlight immidiate child of parnt tag

   //textarea[@id="APjFqb"]/../../div//span  (//span)==>It will locate any child of parent

Customized xpath 
 Xpath axes
 . – current node
o .//a[@aria-label="Gmail "]

 / - immediate child
o //*[@aria-label="Gmail "]/../a

 // - any child
o //a[@aria-label="Gmail "]

 /.. – parent
o //a[@aria-label="Gmail "]/..

 @- attribute
o //a[@aria-label="Gmail "]

 * - any value
o //*[@aria-label="Gmail "]/..

 Xpath keyowrds
 Parent
o //*[@aria-label="Gmail "]/parent::div

 Child
o //*[@aria-label="Gmail "]/parent::div/child::a

 Ancestor
o //*[@aria-label="Gmail "]/ancestor::div[@class="gb_M gb_1 gb_Pf gb_Wf"]

 Following-sibling
o //*[@aria-label="Gmail "]/ancestor::div[@class="gb_M gb_1 gb_Pf gb_Wf"]/following-sibling::div[@class="gb_ud gb_1 gb_I"]

 Preceding
//div[@class="gb_ud gb_1 gb_I"]/preceding::div[@class="gb_M gb_1 gb_Pf gb_Wf"]

 Xpath functions
 Text()
o //a[text()='Gmail']

 Contains()
o //a[contains(text(),'mai')]

o (//a[contains(@class,"MV3Tn")])[1]
 Starts-with()

o //a[starts-with(text(),'Gma')]
o (//a[starts-with(@class,"MV3Tn")])[1]

 Position()
o (//input)[position()=1]

 Last()
o (//input)[last()

*/

import { test, expect } from '@playwright/test';

test('write a test to capture the last departure ',async({page})=>{

   await page.goto("https://www.cleartrip.com/?utm_source=google&utm_medium=cpc&utm_campaign=BR_Cleartrip-Desktab&dxid=Cj0KCQiAy6vMBhDCARIsAK8rOgmjBH04UikDXG5NHPKa_IlKSzRiTnozyXuewoQrb_K9ISOnnIS3HqUaAmOuEALw_wcB&gad_source=1&gad_campaignid=88884643&gbraid=0AAAAADsvfF0h3clucaE3HrmfY1wAVewqU&gclid=Cj0KCQiAy6vMBhDCARIsAK8rOgmjBH04UikDXG5NHPKa_IlKSzRiTnozyXuewoQrb_K9ISOnnIS3HqUaAmOuEALw_wcB");
   await page.reload();
   await page.waitForLoadState('networkidle');

   const fromLocator = page.locator('(//input[contains(@class,"w-100p")])[1]');
   await fromLocator.waitFor({ state: 'visible' });
   await fromLocator.fill("Bangalore");
   
   const suggestionDropdown=page.locator('//div[@class="flex flex-middle"]/../../../ul').first();
   await suggestionDropdown.waitFor({state: 'visible'});
   await suggestionDropdown.click();

   const toLocator=page.locator('(//input[contains(@class,"w-100p")])[2]');
  
   await toLocator.waitFor({state:"visible" })
   await toLocator.fill("Delhi");
   await suggestionDropdown.waitFor({state: 'visible'});
   await page.waitForTimeout(2000);
   await suggestionDropdown.click();


   //Write xpath to capture departure time of last indigo flight 
   const lastdeparture=page.locator('(//img[@alt="6E"])[last()]/../../..//div[@class="sc-aXZVg hzIMyg ta-left"]');
   console.log(lastdeparture.textContent());
   

   //Write xpath to capture stops of last airindia flight
   const nostop=page.locator('(//img[@alt="IX"])[last()]/../../..//p[@class="sc-gEvEer dmghgW t-truncate ta-center"]');
   console.log(nostop.textContent());


   //Write xpath to get how many air india flight are available in that  page
   
});


test('last indigo flight',async({page})=>{

   await page.goto("https://www.cleartrip.com/flights/results?adults=1&childs=0&infants=0&class=Economy&depart_date=18/03/2026&from=BLR&to=DEL&intl=n&origin=BLR%20-%20Bengaluru,%20IN&destination=DEL%20-%20New%20Delhi,%20IN&sft=&sd=1771522467245&rnd_one=O&isCfw=false&utm_source=google&utm_medium=cpc&utm_campaign=BR_Cleartrip-Desktab&isFF=false&sourceCountry=Bengaluru&destinationCountry=New%20Delhi&nonStop=");

   //Write xpath to capture departure time of last indigo flight 
   const lastdeparture=page.locator('(//img[@alt="6E"])[last()]/../../..//div[@class="sc-aXZVg hzIMyg ta-left"]');
   const text = await lastdeparture.textContent();
   console.log(text);

   //Write xpath to capture stops of last airindia flight
   const nostop=page.locator('(//img[@alt="IX"])[last()]/../../..//p[@class="sc-gEvEer dmghgW t-truncate ta-center"]');
   const text2 = await nostop.textContent();
   console.log(text2);

   await page.mouse.wheel(0, 1000); // scroll down 1000px

   //Write xpath to capture price for last but previous indigo flight 
   const secondLast=page.locator('(//img[@alt="6E"])[last()-1]/../../..//h2');
   const price=await secondLast.textContent();
   console.log(price);

   await page.reload();

   console.log(text);
   console.log(text2);


   await page.mouse.wheel(0, 100); // scroll down 1000px

   console.log(price);


});

