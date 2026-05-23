import { Browser, BrowserContext, chromium, firefox, Page, webkit } from "@playwright/test";

(async ()=>{
let browser:Browser= await chromium.launch({channel:'chrome', headless:false});
let con1:BrowserContext=await browser.newContext();
let con2:BrowserContext=await browser.newContext();

let page1:Page=await con1.newPage();
let page2:Page=await con2.newPage();

await page1.goto("http://localhost:3000/");
await page1.getByRole('textbox',{name:'Enter username (e.g. alice, bob)'}).fill('Rajesh');
await page1.getByRole('button',{name:'Join Chat'}).click();

await page2.goto("http://localhost:3000/");
await page2.getByRole('textbox',{name:'Enter username (e.g. alice, bob)'}).fill('Dipali');
await page2.getByRole('button',{name:'Join Chat'}).click();

await page1.getByRole('textbox',{name:'Type a message...'}).fill("Hi Dipali");
await page2.getByRole('textbox',{name:'Type a message...'}).fill("Hi Rajesh");

page1.pause();
page2.pause();
})();