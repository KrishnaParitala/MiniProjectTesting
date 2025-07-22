import { test,chromium, expect } from '@playwright/test';

import path from 'path';

test('Saucedemo', async () => {

    const browser=await chromium.launch()

    const page=await browser.newPage()
    
    await page.goto('https:saucedemo.com/v1/');

    await page.locator('//input[@id="user-name"]').click()

    await page.locator('//input[@id="user-name"]').fill('standard_user')

    await page.locator('//input[@id="password"]').click()

    await page.locator('//input[@id="password"]').fill('secret_sauce')

    await page.getByRole('button',{type:'submit'}).click()

    await page.screenshot({path:'screenshot.png',fullPage:true})


})



