import test, { Frame, FrameLocator, Locator } from "@playwright/test";

test('handling js alerts test',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

// type#1: Alert
page.on('dialog', async(popup)=>{
    if(popup.type()==='alert')
        popup.accept();
});
//type#2: Confirm
page.on('dialog', async(popup)=>{
    if(popup.type()==='confirm')
        popup.accept();
        
});

//type#3: Prompt
page.on('dialog', async(popup)=>{
    if(popup.type()==='prompt')
        popup.accept('Rajesh');
        
});

await page.getByRole('button',{name:'Click for JS Alert'}).click();

await page.getByRole('button',{name:'Click for JS Confirm'}).click();

await page.getByRole('button',{name:'Click for JS Prompt'}).click();

await page.pause();
})