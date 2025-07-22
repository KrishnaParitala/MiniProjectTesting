const {test,expect,chromium}=require('@playwright/test')

const fetch = require('node-fetch')

test('Broken links',async ()=>{

    const browser=await chromium.launch({
        channel:'msedge',
})

const page=await browser.newPage()

await page.goto('https://demoqa.com/links')

const hrefs=await page.$$('a',
    anchors =>
        anchors.map(a=>a.getAttribute('href')).filter(href =>  href!==null)

)

const brokenlinks=[]

for(const hrefvalue of hrefs){

    if(!hrefvalue || hrefvalue ===''){
        continue;
    }

    try{
        var correcturl=new URL(hrefvalue,page.url()).href

        const response=await fetch(correcturl)

        if(response.status >=400){

            brokenlinks.push({url:correcturl,status:response.status})
        }
    }
    catch(e){

        brokenlinks.push({url:correcturl,status:'Error: '+e.message})
    }
}

if(brokenlinks.length === 0){
    console.log("No brokenlinks found")
}
else{
    brokenlinks.forEach((link,index)=>{
        console.log(`${index + 1}. ${link.url} =>${link.status}`)
    })
}

})