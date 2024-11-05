import url from '../testData/amazonUrl.json'
import {test , expect, chromium} from '@playwright/test'
import { Amazon } from '../pageObject/amazonWelcomePage'
import { AmazonLP } from '../pageObject/amazonLoginPage'
import { AmazonLp2 } from '../pageObject/amazonLoginPage2'
import credentials from '../testData/credentials.json'
import { AmazonHomePage } from '../pageObject/amazonHomePage'
import { AmazonAddToCart } from '../pageObject/amazonAddToCart'
//import { AmazonWindowPop } from '../pageObject/amazonWindowPopUp'



test("my test",async({page})=>{
const amazon = new Amazon(page)
const amazonlp = new AmazonLP(page)
const amazonlp2 = new AmazonLp2(page)
const amazonHp = new AmazonHomePage(page)
const amazonAdd = new AmazonAddToCart(page)
//const amazonWindowPopup = new AmazonWindowPop(page)





//openning amazon
await page.goto(url.amazonUrl)
await page.waitForLoadState('load')
await expect(amazon.amazonSearch,"amazon search button is not visible ").toBeVisible()
await amazon.amazonSearch.click() 

//login Page
await expect(amazonlp.amazonLpPage,"login button is not visible").toBeVisible()
await amazonlp.amazonLpPage.click()
await page.waitForLoadState('load')

//filling login credentials
await expect(amazonlp2.amazonLp2Page,"id text field is not visible").toBeVisible()
await amazonlp2.amazonLp2Page.fill(credentials.loginNo)
await page.waitForLoadState('load')
//clicking submit button
await amazonlp2.loginSubmitButton.click()
await page.waitForLoadState('load')

await expect(amazonlp2.passPage,"password text field is not visible").toBeVisible()
await amazonlp2.passPage.fill(credentials.pass)
await page.waitForLoadState('load')

await amazonlp2.passSubmitButton.click()
await page.waitForTimeout(3000)

await expect(amazonHp.searchbox,"Search box is not visible").toBeVisible()
await amazonHp.searchbox.fill(credentials.keyword)

await amazonHp.searchButton.click()
await page.waitForLoadState('load')

await page.locator("(//img[@class='s-image'])[1]").click()
await page.waitForLoadState('load')

// await amazonWindowPopup.newWindow()
//  await page.waitForLoadState('load')

    const page1Promise = page.waitForEvent('popup')
    const page1 = await page1Promise
    await page1.locator("//input[@id='add-to-cart-button']").click()
    await page1.waitForLoadState('load')
    await page1.locator("//input[@name='proceedToRetailCheckout']").click()
    await page1.waitForLoadState('load')






// const newTab = await page.goto(url.newWindow)
// await expect(amazonAdd.addToCartPage,"add to cart page is not visible").toBeVisible()
// await amazonAdd.addToCartPage.click()
// await page.waitForLoadState('load')





})
