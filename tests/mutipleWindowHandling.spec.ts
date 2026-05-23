import test, { BrowserContext, Page } from "@playwright/test";

test('file upload test',async({browser})=>{

let context:BrowserContext=await browser.newContext();
let page:Page=await context.newPage();
await page.goto('https://orangehrm.com/contact-sales');

let [childpage]=await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link',{'name':'About Us'}).click()
])

childpage.bringToFront();

console.log('Current page title',await childpage.title());
console.log('Current page URL',childpage.url());

childpage.close();
page.bringToFront();
console.log('Title',await page.title());


await page.pause();



})