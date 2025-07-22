import { test,chromium, expect } from '@playwright/test';

test('Saucedemo', async () => {
    
    const browser=await chromium.launch()
        
    const page=await browser.newPage()
            
    await page.goto('https://demoqa.com/alerts');

    //enable dialog handler

    page.on('alert',async dialog=>{

        await expect(dialog.type()).toContain('alert')

        expect (dialog.message()).toContain('You clicked a button')

        await dialog.accept()
        
    })

    
    await page.locator('//button[@id="alertButton"]').click()
    await page.waitForTimeout(5000)

//handling confirmation
    page.on('confirmation',async dialog=>{

        await expect(dialog.type()).toContain('confirm')

        expect (dialog.message()).toContain('Do you confirm action?')

        await dialog.dismiss()
        
    })


    await page.locator('//button[@id="confirmButton"]').click()

    await expect(page.locator('//span[@id="confirmResult"]')).toHaveText('You selected Cancel')

    await page.waitForTimeout(5000)


//handling prompts
page.on('dialog',async dialog=>{

    expect(dialog.type()).toBe('prompt')

    expect (dialog.message()).toContain('Please enter your name')

    expect (dialog.defaultValue()).toContain('')

    await dialog.accept('Chayan')
    
})


await page.locator('//button[normalize-space()="Click me"]').nth(3).click()

await expect(page.locator('//*[@id="promptResult"]')).toHaveText('You entered Chayan')

await page.waitForTimeout(10000)

})
