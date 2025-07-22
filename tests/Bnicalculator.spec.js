const {test,expect,chromium}=require('@playwright/test')

test('BMI cal',async ()=>{

    const browser=await chromium.launch({
        channel:'msedge',
})

const page=await browser.newPage()

await page.goto('https://www.calculator.net/bmi-calculator.html')

await page.locator('//input[@id="cage"]').fill('30')

await page.locator('//input[@id="cheightmeter"]').fill('170')

await page.locator('//input[@id="ckg"]').fill('60')

await page.getByRole('button',{value:'Calculate'}).nth(0).click()

const text=await page.locator('.bigtext').nth(0)

await expect(text).toContainText('20.8')
})