class AmazonHomePage{
    constructor(page){
        this.page = page
        this.searchbox = page.locator("//input[@type='text']")
        this.searchButton = page.locator("//input[@type='submit']")
    }
}
module.exports = {AmazonHomePage}