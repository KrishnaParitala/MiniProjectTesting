import { test,chromium, expect } from '@playwright/test';

test('Saucedemo', async () => {
    
    const browser=await chromium.launch()
    
    const page=await browser.newPage()
        
    await page.goto('https://opensource-demo.orangehrmlive.com/');


    await page.getByPlaceholder('Username').fill('Admin')

    await page.getByPlaceholder('Password').fill('admin123')

    // await page.pause()

    await page.getByRole('button',{type:'submit'}).click();

    await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click()

    await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span').click()

    await page.locator('.oxd-topbar-body-nav-tab-link').nth(2).click()

    // await page.locator('.oxd-file-input-div').click()

    const findpath=path.resolve('uploadfiles','importData.csv')

    await page.setInputFiles('input[type="file"]',findpath)


    //await page.setInputFiles('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/div/div[1]',findpath)

    //await page.waitForTimeout(5000)

    //await page.locator('.oxd-file-input-div').not.toHaveText('No file selected')

    const filename=await page.locator('.oxd-file-input-div')

    await expect(filename).not.toHaveText('No file selected')

    const file=await filename.textContent()

    console.log(filename)

    await page.close()

    await browser.close()

})
