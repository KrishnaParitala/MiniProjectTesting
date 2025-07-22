import { test,chromium, expect } from '@playwright/test';


test('Saucedemo', async () => {

    const browser=await chromium.launch()

    const page=await browser.newPage()
    
    await page.goto('https:saucedemo.com/v1/');

    await page.locator('//input[@id="user-name"]').click()

    await page.locator('//input[@id="user-name"]').fill('standard_user')

    await page.locator('//input[@id="password"]').click()

    await page.locator('//input[@id="password"]').fill('secret_saucwwe')

    await page.getByRole('button',{type:'submit'}).click()

    // await page.pause()

    const error=await page.locator('//div[@class="login-box"]/form/h3')

    await error.screenshot({path:'errorss.png',fullPage:true})


    await page.close()

    await browser.close()


})
