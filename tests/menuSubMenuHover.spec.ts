import test, { Frame, FrameLocator, Locator } from "@playwright/test";

test('menu and submenu test',async({page})=>{
await page.goto('https://www.bigbasket.com/');

//await page.getByRole('button', { 'name': 'Shop by Category' }).nth(0).click();
await page.locator('[id="headlessui-menu-button-:Rld956:"]').click();
//await page.locator('a.gZzMlg').nth(0).hover();
await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Fashion' }).hover();
//await page.locator('a.gSKZrk').nth(1).hover();
await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Kids Apparel' }).hover();
//await page.locator('a.cMMlRP').nth(0).click();
await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Boys' }).click();

await page.pause();
})