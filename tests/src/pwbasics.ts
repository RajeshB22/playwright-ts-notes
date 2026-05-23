//using iife to understand how to launch browesers manually

import { Browser, chromium, firefox, Page, webkit } from "@playwright/test";

(async ()=>{
//let browser:Browser= await chromium.launch({channel:'chrome', headless:false});
//let browser:Browser= await chromium.launch({channel:'chromium', headless:false});
//let browser:Browser= await chromium.launch({channel:'msedge', headless:false});

//firefox
//let browser: Browser=await firefox.launch({headless:false});

//webkit: safari
let browser:Browser=await webkit.launch({headless:false});

let page:Page=await browser.newPage();
await page.goto("https://www.facebook.com");
let title:String=await page.title();

console.log(title);
await page.close();
})();