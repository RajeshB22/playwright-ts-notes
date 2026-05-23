

import { test, expect, Page, chromium, Browser, webkit } from '@playwright/test';

test('expect assertions test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //expect(100).toBe(200);//no wait
    expect(page.url()).toContain('account/register11111');

    let header = page.getByRole('heading', { name: 'Register Account' });

    await expect(header).toBeVisible();
    await expect.soft(header).toHaveText('Register Account1111');

    console.log('hello automation......');

    await expect.soft(page.locator('aside#column-right a')).toHaveCount(20);

    await page.locator('#input-firstname').fill('Naveen Automation');
    await expect(page.locator('#input-firstname')).toHaveValue('Naveen Automation');

    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');

    await expect(page.getByTestId('country-select').locator('option')).toHaveCount(6);

    await page.getByTestId('country-select').selectOption('India');
    await expect(page.getByTestId('country-select')).toHaveValue('in');


});



test('expect assertions for element state test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');

    await expect(page.locator('#register-btn')).toBeDisabled({ timeout: 10000 });

    await expect(page.locator('#firstname')).toBeEmpty();
    await expect(page.locator('#email')).toBeEmpty();

    await expect(page.locator('#firstname')).toBeEditable();
    await expect(page.locator('#email')).toBeEditable();

    await expect(page.locator('#username')).not.toBeEditable();

    await page.locator('#agree').check();
    await expect(page.locator('#agree')).toBeChecked();

    await expect(page.locator('#register-btn')).toBeEnabled();

    await page.locator('#agree').uncheck();
    await expect(page.locator('#register-btn')).toBeDisabled();


});



test('expect assertions for element attributes test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');

    await expect(page.locator('#firstname')).toHaveAttribute('type', 'text');
    await expect(page.locator('#firstname')).toHaveAttribute('placeholder', 'Enter first name');

    await expect(page.locator('#username')).toHaveAttribute('readonly', '');

    await expect(page.locator('[data-test="firstname"]')).toHaveId('firstname');

});