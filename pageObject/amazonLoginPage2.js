class AmazonLp2{
    constructor(page){
        this.page = page
        this.amazonLp2Page =  page.locator("//input[@type='email']")
        this.loginSubmitButton = page.locator("//input[@type='submit']")
        this.passPage = page.locator("//input[@type='password']")
        this.passSubmitButton = page.locator("(//input[@class='a-button-input'])[1]")
    }
}
module.exports = {AmazonLp2}