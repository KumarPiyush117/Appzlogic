class AmazonAddToCart{
    constructor(page){

        this.page = page
        this.addToCartPage = page.locator("(//input[@id='add-to-cart-button'])[1]")
    }
}

module.exports = {AmazonAddToCart}