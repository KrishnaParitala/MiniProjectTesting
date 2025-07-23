
import{expect} from '@playwright/test'

export class Searchpage{

    constructor(page){

        this.page=page;

        this.textvalue=this.page.locator('//textarea[@id="APjFqb"]') //value locator we have to enter in search box
        this.initialurl='';
    }

    // method to open the google website
    async gotopage(){
        
        try{
            
            await this.page.goto('https://www.google.com')
            this.initialurl = await this.page.title();
            expect(this.initialurl).toContain('Google');
        }
        catch(e){

            console.error('Error Message:'+ e)
        }
    }

    //enter the value in the google search textbox
    async entertext(value){
        try{

        await this.textvalue.fill(value)      // fill the value in the searchbox

        expect(await this.textvalue.inputValue()).toBe(value);   //// Verify that the current input field's value matches the expected value

        await this.page.keyboard.press('Enter')

        await this.page.waitForLoadState()
    }
    catch(e){

        console.error('navigation error')
    }
  }
    }
