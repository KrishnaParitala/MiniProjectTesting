import { test, expect, chromium} from '@playwright/test';
 
test('cruise', async ()=>{
 
    const browser = await chromium.launch({headless:false})
    const page = await browser.newPage()
    await page.goto("https://www.tripadvisor.in")
    await page.locator('//a[contains(@href,"Rentals")]').click()
    await page.getByPlaceholder('Destination').fill('Nairobi')
    await page.locator('//a[contains(@href,"/VacationRentals-g3688711-Reviews-Nairobi_Region-Vacation_Rentals.html")]').click()
    await page.locator('//a[contains(@href,"Cruises")]').click()
    await page.locator('//span[normalize-space()="Cruise line"]').click()
    await page.locator('//span[normalize-space()="Cruise line"]').selectOption({value:'Disney Cruise Line'})
    await page.locator('//span[normalize-space()="Cruise ship"]').click()
    await page.locator('//span[normalize-space()="Cruise ship"]').selectOption({value:'Disney Fantasy'})
    await page.getByRole('button',{type:"Search"}).click();
});