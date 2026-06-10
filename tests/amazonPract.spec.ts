import { test } from '@playwright/test';
//Objective: Go to amazon and searrch for a product. Retrieve price of the product with dynamic locators.
test('amazon dynamic locators iphone test ', async ({page})=>{
    await page.goto('https://www.amazon.com/');
    //setting delivery location to US

    await page.getByRole('button',{name:'Deliver to'}).click();
    await page.getByRole('textbox',{name:'or enter a US zip code'}).fill('90001');
    await page.getByRole('button',{name:'Apply'}).last().click();
    //await page.getByRole('button',{name:'Done'}).click();
    await page.getByRole('button',{name:'Continue'}).click();
    await page.getByRole('button',{name:'Deliver to Los Angeles 90001'}).waitFor();
    await page.getByRole('searchbox',{name:'Search Amazon'}).fill('Apple iPhone 16 Pro, 256GB');
    await page.getByRole('button',{name:'Go'}).first().click();

    let price:string=await page.locator("//span[contains(text(),'Apple iPhone 16 Pro, 256GB')]//ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']//span[@class='a-offscreen']").first().innerText();
    console.log('Price is', price)
    //await page.pause();

   
});

test('amazon dynamic locators samsung phone test ', async ({page})=>{
    await page.goto('https://www.amazon.com/');
    //setting delivery location to US

    await page.getByRole('button',{name:'Deliver to'}).click();
    await page.getByRole('textbox',{name:'or enter a US zip code'}).fill('90001');
    await page.getByRole('button',{name:'Apply'}).last().click();
    //await page.getByRole('button',{name:'Done'}).click();
    await page.getByRole('button',{name:'Continue'}).click();
    await page.getByRole('button',{name:'Deliver to Los Angeles 90001'}).waitFor();
    await page.getByRole('searchbox',{name:'Search Amazon'}).fill('Galaxy S26 Ultra, Unlocked Android Smartphone, 512GB');
    await page.getByRole('button',{name:'Go'}).first().click();

    let price:string=await page.locator("//span[contains(text(),'Galaxy S26 Ultra, Unlocked Android Smartphone, 512GB')]//ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']//span[@class='a-offscreen']").first().innerText();
    console.log('Price is', price)
    //await page.pause();

   
});
//Galaxy S26 Ultra, Unlocked Android Smartphone, 512GB, Privacy Display, Galaxy AI, AI Camera, Super Fast Charging 3.0, Durable Battery, 2026, US 1 Year Warranty, Black