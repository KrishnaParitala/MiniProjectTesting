import {test,chromium,expect} from '@playwright/test'
import { Searchpage } from '../Pages/Google';
import { Orangepage } from '../Pages/Orangehrm';
import { Partnerspage } from '../Pages/Partners';
import registrationdata from '../testdata/Registrationdata.json'


test('Navigation',async({page})=>{


    const searchpg=new Searchpage(page)
    await searchpg.gotopage();

    await searchpg.entertext('Orange HRM demo')
    
    //await page.waitForTimeout(15000);

    const navpage=new Orangepage(page)

    await navpage.gotopage();

    await navpage.details(registrationdata.FullName,
                        registrationdata.PhoneNumber,
                        registrationdata.Business_Email,
                        registrationdata.Country,
                        registrationdata.Number_Of_Employees,
                        registrationdata.Job_Title,
                        registrationdata.Your_Message)


    await page.waitForTimeout(10000);

    //ait page.waitForLoadState();

    await navpage.contactsalesbutton();


    await navpage.Screenshot();

    const partnerpage=new Partnerspage(page)

    await partnerpage.getpartner()

    await partnerpage.partnerlist()

})