import test, { expect, Locator } from "@playwright/test";

//click on a checkbox until you find the name
//check naveen's method- bit cleaner than this. Session date: 14/05/2026
test('pagination lecture task test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while(true){
        let ele:Locator=await page.locator('#dataTable tr').filter({hasText:'logan_wright'}).getByRole('checkbox').first();
        let isElePresent=await ele.isVisible();
        if(isElePresent){
            await ele.check();
            break;
        }
        else{
            //await expect(page.getByRole('button',{name:'›'})).toBeEnabled();
            if (await page.getByRole('button',{name:'›'}).isDisabled())
                {
                    console.log("Pagination over!")
                    break;
                }
                else{
            await page.getByRole('button',{name:'›'}).click();
            await page.waitForTimeout(300);
            }
        }


    }

    

    await page.pause();
});