const { selectors } = require("@playwright/test")

class AmazonLP{
    constructor(page){
        this.page = page
        this.amazonLpPage = page.locator("#nav-link-accountList")
        
    }
}
module.exports = {AmazonLP}