import {expect} from '@playwright/test'
import fs from 'fs';

export class Partnerspage{

    constructor(page){

        this.page=page;

        this.whyorange=this.page.locator('//li[@class="nav-item"]/a').nth(1)
        this.partnerbtn=this.page.locator('//li[normalize-space(text())="Partners"]')
        this.Ourpartnerbtn=this.page.locator('//li[normalize-space(text())="Partners"]/div/div//h6[2]//a')
        this.prtlist=this.page.locator('.marketplace-company')

    }

    async getpartner(){
        
        await this.whyorange.hover()
        await this.partnerbtn.hover()
        await this.Ourpartnerbtn.hover()
        //await this.page.waitForTimeout(5000)
        await this.Ourpartnerbtn.click()
    }

    async partnerlist(){

        const list=[];
        
        for(let i=0;i<await this.prtlist.count();i++){
            const data=await this.prtlist.nth(i).textContent();
            //
            // 
            console.log(data)
            let data1={
                "name":data.trim()
            }
            list.push(data1);
        }
        fs.writeFileSync('Output/result1.json',JSON.stringify(list,null,2))
    }
}