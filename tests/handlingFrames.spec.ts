import test, { Frame, FrameLocator, Locator } from "@playwright/test";

test('handling frames test',async({page})=>{
await page.goto('https://www.dezlearn.com/nested-iframes-example/');

let parentFrame:FrameLocator= page.frameLocator('#parent_iframe');

await parentFrame.getByRole('button',{name:'Click Here'}).click();

await parentFrame.frameLocator('#iframe1').getByRole('button',{name:'Click Here'}).click(); //nested frame

let heading: string=await page.getByRole('heading',{level:2}).innerText();

console.log(heading);

//how to return all the frames present on page

let frames:Frame[]= page.frames();

for (let e of frames){
    console.log(e.name()," ", e.url());
}


await page.pause();
})