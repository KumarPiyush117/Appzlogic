import pass from '../testData/credentials.json'
class AmazonPassPage{
    constructor(page){
        this.page = page
        this.amazonPass = page.locator("//input[@type='password']")
    }
}
module.exports = {AmazonPassPage}