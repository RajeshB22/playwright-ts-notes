

import { test, Page, chromium, Browser, Locator, expect, ElementHandle } from '@playwright/test';


test('wait test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', { timeout: 6000 });

    let lastName: Locator = page.locator('#input-lastname121212');
    console.log(lastName);
    await lastName.fill('naveen', { timeout: 10000 });

    await page.click('#input-lastname', { timeout: 4000 });//legacy
    //sel:
    //driver.findElement(By.id('21212121'));


    //20 timeout
    //10 actiontimeout
    //5 test level

    //expect(page.getByRole('heading', { name: 'Register Account', level: 1 })).toHaveText('Register Account11');


    // let firstNameElement: ElementHandle<SVGElement | HTMLElement> = await page.waitForSelector('#input-firstname', { timeout: 5000, state: 'visible' }); //css/xpath
    // await firstNameElement.fill('Naveen');


    // await page.getByRole('heading', { name: 'Register Account', level: 1 }).waitFor({ timeout: 5000, state: 'visible' });//getBy
    // await page.locator('#input-lastname').waitFor({ timeout: 5000, state: 'visible' });//css/xpath

    //await page.pause()

});


//defaiult wait: 60 secs

//lgon page -- check the logo
//test.setTimeout(5000);

//trasactions end to end test CRUD: 120 ms
//test.setTimeout(120000);
//
//
//
//
//
//

//t3 -- 60 secs
//t4 - 60 secs
