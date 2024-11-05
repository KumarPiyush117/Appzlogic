class AmazonWindowPop {
    constructor(page){
        this.page = page
        this.newWindowPage = page.locator("(//span[@class='a-size-base-plus a-color-base a-text-normal'])[1]").click()
    
    }
    async newWindow({page}){
        const page1Promise = page.waitForEvent('popup')
        const page1 = await page1Promise
        
        this.page1 = await this.newWindowPage
        //const page1 = await page1Promise
        await page1.locator("//input[@id='add-to-cart-button']").click()
        await page1.waitForLoadState('load')
        await page1.locator("//input[@name='proceedToRetailCheckout']").click()
        await page1.waitForLoadState('load')
    }

    }
    

module.exports = {AmazonWindowPop}