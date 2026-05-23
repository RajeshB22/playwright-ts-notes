import test, { Frame, FrameLocator, Locator } from "@playwright/test";

test('file upload test',async({page})=>{
await page.goto('https://practice.expandtesting.com/upload');

await page.getByRole('button',{name:'Choose File'}).setInputFiles('C:\\Users\\LENOVO\\Downloads\\test.txt');
//only works when type=file is present

await page.pause();



})

test('multiple file upload test',async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

await page.locator('#multi-file').setInputFiles(['C:\\Users\\LENOVO\\Downloads\\test.txt','C:\\Users\\LENOVO\\Downloads\\test2.txt']);
//only works when 'multiple' attribute is present

await page.pause();



})

test('file upload without type=file test',async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

let [fchooser]=await Promise.all([
page.waitForEvent('filechooser'),
page.getByRole('button',{'name':'Choose Files'}).click()
]);
fchooser.setFiles('C:\\Users\\LENOVO\\Downloads\\test.txt');

await page.pause();



})

