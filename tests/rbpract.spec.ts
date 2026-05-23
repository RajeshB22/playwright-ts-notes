import test from "@playwright/test";

test('my first PW test',async({page})=>{
await page.goto("https://www.google.com");

let title:String =await page.title();
console.log('Title is', title);

});