import test, { Locator } from "@playwright/test";

test.beforeEach(async({page})=>{
    await page.goto('https://www.amazon.com/');
    //setting delivery location to US

    await page.getByRole('button',{name:'Deliver to'}).click();
    await page.getByRole('textbox',{name:'or enter a US zip code'}).fill('90001');
    await page.getByRole('button',{name:'Apply'}).last().click();
    //await page.getByRole('button',{name:'Done'}).click();
    await page.getByRole('button',{name:'Continue'}).click();
    await page.getByRole('button',{name:'Deliver to Los Angeles 90001'}).waitFor();
})
//Search a product and get its rating
test('fetch rating of product test',async ({page})=>{

    await page.getByRole('searchbox',{name:'Search Amazon'}).fill('PIXPRO FZ55-BK');
    await page.getByRole('button',{name:'Go'}).first().click();

    let results:Locator=page.locator('div.s-result-item').filter({hasText:'PIXPRO FZ55-BK 16MP CMOS Sensor Digital Camera'});
    let ratings=await results.locator('span.a-size-small').innerText();
    console.log('Rating is ', ratings);
    //await page.pause();
});

//Search for "wireless headphones", change the sort to "Price: Low to High", then extract the prices of the first 3 results and assert they are in ascending order.
test('sort first 3 results test',async ({page})=>{
    let prices:string[]=[];
    await page.getByRole('searchbox',{name:'Search Amazon'}).fill('wireless headphones');
    await page.getByRole('button',{name:'Go'}).first().click();

    await page.getByRole('combobox', { name: 'Sort by:' }).selectOption({label:'Price: Low to High'});
    await page.getByRole('heading',{level:2, name:'Results',exact:true}).waitFor();


    let results:Locator[]=await page.locator('div.s-asin').all();
    for( let i=0; i<3;i++){
        prices.push(await results[i].locator("span.a-offscreen").first().innerText());
    }

    console.log(prices);
    
    
    //await page.pause();
});