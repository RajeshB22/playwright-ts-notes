import test from "@playwright/test";

test('fetch cheapest flight',async ({page})=>{
    await page.goto("https://www.google.com/travel/flights");
    await page.getByRole('combobox',{name:'Where to?'}).fill('Pune');
    await page.locator('div.zsRT0d').filter({hasText:'Pune International Airport'}).waitFor();
    await page.locator('div.zsRT0d').filter({hasText:'Pune International Airport'}).click();

    await page.getByRole('textbox',{name:'Departure'}).click();
    await page.locator('div.Bc6Ryd').filter({hasText:'June'}).getByText('26').click();

    await page.getByRole('textbox',{name:'Return'}).click();
    await page.locator('div.Bc6Ryd').filter({hasText:'July'}).getByText('1',{exact:true}).click();
    await page.getByRole('button',{name:'Done'}).click();
    //await page.keyboard.press('Tab');
    
    //await page.getByRole('button',{name:'Search for flights'}).waitFor({state:"visible"});
    await page.getByRole('button',{name:'Search for flights'}).click({});
    await page.pause();
});