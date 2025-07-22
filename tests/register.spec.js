const {test,expect,chromium}=require('@playwright/test')

test('Register',async ()=>{

    const browser=await chromium.launch({
        channel:'msedge',
})

const page=await browser.newPage()

await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

await page.locator('input[name^="btnchkavail"]').click()

const errormessage=await page.locator('//span[@class="error"]').textContent()

console.log(errormessage)



})