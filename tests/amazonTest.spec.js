
import url from '../testData/amazonUrl.json'
import {test , expect} from '@playwright/test'
import { Amazon } from '../pageObject/amazonWelcomePage'
import { AmazonLP } from '../pageObject/amazonLoginPage'
import { AmazonLp2 } from '../pageObject/amazonLoginPage2'
import credentials from '../testData/credentials.json'
import { AmazonHomePage } from '../pageObject/amazonHomePage'
import { AmazonAddToCart } from '../pageObject/amazonAddToCart'




test("my test",async({page})=>{
const amazon = new Amazon(page)
const amazonlp = new AmazonLP(page)
const amazonlp2 = new AmazonLp2(page)
const amazonHp = new AmazonHomePage(page)
const amazonAdd = new AmazonAddToCart(page)



await page.goto(url.amazonUrl)
await page.waitForLoadState('load')
await expect(amazon.amazonSearch,"amazon search button is not visible ").toBeVisible()
await amazon.amazonSearch.click()
await expect(amazonlp.amazonLpPage,"login button is not visible").toBeVisible()
await amazonlp.amazonLpPage.click()
await page.waitForLoadState('load')
await expect(amazonlp2.amazonLp2Page,"id text field is not visible").toBeVisible()
await amazonlp2.amazonLp2Page.fill(credentials.loginNo)
await page.waitForLoadState('load')

await page.locator("//input[@type='submit']").click()
await page.waitForLoadState('load')

await page.locator("//input[@type='password']").fill(credentials.pass)
await page.waitForLoadState('load')

await page.locator("(//input[@class='a-button-input'])[1]").click()
await page.waitForTimeout(3000)

await expect(amazonHp.searchbox,"Search box is not visible").toBeVisible()
await amazonHp.searchbox.fill(credentials.keyword)

await page.locator("//input[@type='submit']").click()
await page.waitForLoadState('load')

await page.locator("(//img[@class='s-image'])[1]").click()
await page.waitForTimeout(3000)



// await expect(amazonAdd.addToCartPage,"add to cart page is not visible").toBeVisible()
// await page.waitForTimeout(5000)
// await amazonAdd.addToCartPage.click()
// await page.waitForLoadState('load')



})
