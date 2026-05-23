import test, { expect } from "@playwright/test";

test('calendar month traverse back assignment test', async ({ page }) => {
    await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html');
    let desiredMonthYear = 'November 2024';
    await page.locator('#datepicker').click();
    while (true) {
        let month: string = await page.locator('span.ui-datepicker-month').innerText();
        let year: string = await page.locator('span.ui-datepicker-year').innerText();
        let currentMonthYear: string = month + ' ' + year;
        if (currentMonthYear === desiredMonthYear) {
            console.log('We are on the desired month');
            break;
        } else {
            await page.getByTitle('Prev').click();
            await page.waitForTimeout(500);
        }



    }
    //await page.pause();
});