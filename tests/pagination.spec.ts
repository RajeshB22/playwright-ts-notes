import test, { expect } from "@playwright/test";

test('pagination assignment test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    //let's add new users and check if they are added to page 11

    await page.getByRole('textbox',{name:'Username'}).fill('Rajesh');
    await page.getByRole('textbox',{name:'Email'}).fill('Rajesh@dipali.com');
    await page.getByRole('textbox',{name:'Company'}).fill('Infosys');
    await page.getByRole('textbox',{name:'City'}).fill('HYD');

    await page.getByRole('button',{name:'+ Add Row'}).click();

    //clicking the related checkbox
    await page.locator('#dataTable tr').filter({hasText:'Rajesh'}).locator('input[type="checkbox"]').check();

    //page should be 11
    //expect(await page.getByRole('button',{name:'10'})

    await page.pause();
});