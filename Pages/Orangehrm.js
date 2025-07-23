import {expect} from '@playwright/test'

export class Orangepage{

    constructor(page){

        this.page=page;

        this.websiteselect=this.page.locator('//h3[normalize-space()="Human Resources Management Software | OrangeHRM HR ..."]')

        this.contactsales=this.page.locator('xpath=//button[normalize-space()="Contact Sales"]')

        this.fullname=this.page.locator('//input[@name="FullName"]')

        this.phonenumber=this.page.locator('#Form_getForm_Contact')

        this.businessemail=this.page.locator("//input[@id='Form_getForm_Email']")

        // this.countryname=this.page.locator("//select[@id='Form_getForm_Country']")
        this.countryname = this.page.getByRole("combobox",{name:"Country",exact:true});


        this.employees=this.page.getByRole("combobox",{name:"No Of Employees",exact:true});

        this.title=this.page.locator('//input[@name="JobTitle"]')

        this.message=this.page.locator('//textarea[@id="Form_getForm_Comment"]')

        this.finalbutton=this.page.locator('//input[@id="Form_getForm_action_submitForm"]')

    }

    async gotopage(){

        await this.websiteselect.hover()

        await this.websiteselect.click()

        //await expect(this.contactsales).nth(1).toBeChecked('Contact Sales')

        await this.contactsales.nth(1).click()
    }

    async details(fullname,phno,email,country,emp,jobtitle,msgbox){

        await expect(this.fullname).toBeVisible()

        await this.fullname.fill(fullname);

        await this.phonenumber.fill(phno)

        await this.businessemail.fill(email);

        //await this.page.waitForTimeout(5000);
        await this.countryname.click();

        await this.countryname.selectOption({value:country})

        //await expect(this.countryname).toBeChecked();

        await this.employees.click();

        await this.employees.selectOption({value:"11 - 50"})

        await this.title.fill(jobtitle)

        try{

            if(msgbox != null){

                await this.message.fill(msgbox)

            }
        }
        catch(e){

            console.log("I didn't enter any text in textbox");
        }

        //await expect(this.message).isVisible()

    }

    async contactsalesbutton(){

        //await expect(this.finalbutton).isVisible()

        await this.finalbutton.click()
    }

    async Screenshot(){

         await this.page.screenshot({path:'./screenshots/myscreen.png',fullPage:true})
     }


}