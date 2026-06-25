import test, { expect } from "@playwright/test";

test('search and waiting task',async ({page})=>{
await page.locator('#search-box').fill('search text');
await page.locator('#search-btn').click();
await expect(page.locator('.results-list li').first()).toBeVisible();

});

test('mock 500 response for particular API',async ({page})=>{
await page.route('**/api/user/profile',async (route)=>{
    await route.fulfill({
        status:500,
        body:'Server down'
        
    })
})

await page.goto('dummy.com/dashboard');
await expect(page.locator('.error-banner')).toBeVisible();

});