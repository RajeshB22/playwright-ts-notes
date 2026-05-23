import test, { Frame, FrameLocator, Locator } from "@playwright/test";

test('file download test',async({page})=>{
await page.goto('https://demoqa.com/upload-download');

let [download]=await Promise.all([
page.waitForEvent('download'),
page.getByRole('button',{'name':'Download'}).click()
]);

download.saveAs('./Downloads/'+await download.suggestedFilename());


await page.pause();
})