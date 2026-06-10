import test, { Locator } from "@playwright/test";

test('form elements test',async({page})=>{



    
    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    await page.getByRole('radio',{name:'I do not wish to receive FREE copies of HR Magazine regularly.'}).click();

    await page.getByPlaceholder('Title',{exact:true}).fill('Mr');

    await page.getByRole('textbox',{name:'Initials'}).pressSequentially('RBBBB',{delay:500}); //mimics actual user input

    await page.getByRole('textbox',{name:'Surname'}).fill('Bejgum');

    await page.locator('#Contact_DirectEmail').fill('okay@gmail.com'); //css selector id

    await page.getByRole('textbox',{name:'Title'}).last().fill('SDET'); //selecting last element from multiple matches

    await page.locator('[name="Contact.CompanyName"]').fill('Genpact'); //css selector class

    await page.locator('//input[@id="Contact_AddressLine1"]').fill(`Lane 1, Road 3, HYD`); //xpath

    await page.getByRole('textbox',{name:'Town / City'}).fill('Hyderabad');

    await page.locator('#Contact_CountryCode').selectOption({label:'New Zealand'}); //select dropdown with visible text

    await page.waitForTimeout(2000);

    await page.locator('#Contact_CountryCode').selectOption({value:'NL'}); //select dropdown with value

    await page.waitForTimeout(2000);

    await page.locator('#Contact_CountryCode').selectOption({index:5}); //select dropdown with index

    await page.getByRole('textbox',{name:'Postcode / Zipcode'}).fill('500099');

    await page.getByRole('textbox',{name:'Company Telephone Number'}).fill('456456');

    await page.locator('#Question-100034').selectOption({value:'D'});

    await page.locator('#Question-758').selectOption({label:'Finance Director'});

    await page.locator('#Question-759').selectOption('Construction'); //select dropdown value default way

    let checkboxes:Locator[]=await page.getByRole('checkbox').all(); //store multiple elements 

    for (let e of checkboxes){ //iterate and click on all checkboxes
        console.log(await e.innerText());
        await e.click();
    }

    await page.getByRole('button',{name:'Submit Request'}).click(); //button

    await page.locator('img').nth(0).click(); //image

    await page.goBack(); //browser go back

    let imgClass=await page.getByAltText('HR Magazine').getAttribute('class'); // getByAltText() & getting a attribute

    console.log(imgClass);

    await page.getByRole('link',{name:'circulation@markallengroup.com'}).highlight(); //highlight

    //await page.pause();
});