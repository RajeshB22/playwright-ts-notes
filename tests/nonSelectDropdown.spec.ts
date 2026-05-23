import test, { Locator } from "@playwright/test";

test('non select dropdown elements test',async({page})=>{
    await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");

    await page.getByRole('textbox',{name:'Select'}).first().click();

    let checkboxes:Locator[]=await page.locator('span.comboTreeItemTitle ').all();

    for(let i=0;i<=14;i++){
        await checkboxes[i].click();
    }

    //second dropdown
    await page.getByRole('textbox',{name:'Select'}).last().click();

    await page.pause();
});