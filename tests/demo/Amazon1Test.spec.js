const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

test("AmazonTest 1",async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false }); // Set headless: true for headless mode
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to Amazon India
  await page.goto('https://www.amazon.in');

  // Accept cookies if prompted
  try {
    await page.click('button#sp-cc-accept'); // Update selector if necessary
  } catch (error) {
    console.log('No cookie consent prompt');
  }

  // Search for a product
  await page.fill('twotabsearchtextbox', 'laptop');
  await page.getByRole('button', { })                                                      //await page.click('nav-search-submit-button');                   //input#nav-search-submit-button

  // Wait for search results to load
  await page.waitForSelector('.s-main-slot');

  // Select the first product from the search results
  await page.click('.s-main-slot .s-result-item h2 a');

  // Wait for the product page to load
  await page.waitForSelector('#productTitle');

  // Add the product to the cart
  await page.click('#add-to-cart-button');

  // Wait for the cart confirmation message
  await page.waitForSelector('.a-size-medium.a-color-success'); // Adjust selector if necessary

  // Verify the item has been added to the cart
  const confirmationMessage = await page.innerText('.a-size-medium.a-color-success');
  console.log(confirmationMessage);

  // Close the browser
  await browser.close();
})();



// const { chromium } = require('@playwright/test');

// test("my first test",async () => {
//   // Launch the browser
//   const browser = await chromium.launch();
//   const page = await browser.newPage();

//   // Navigate to Amazon
//   await page.goto('https://www.amazon.in');

//   // Locate the search bar, type "Hot Wheels", and submit
//   const searchBar = await page.locator('input[name="field-keywords"]');
//   await searchBar.fill('Hot Wheels');
//   await searchBar.press('Enter');

//   // Wait for results to load
//   await page.waitForSelector('.s-main-slot');

//   // Optionally, log the title of the first result
//   const firstResult = await page.locator('.s-main-slot .s-result-item').first();
//   const title = await firstResult.locator('h2').innerText();
//   console.log(`First result title: ${title}`);

//   // Close the browser
//   await browser.close();node
// })();
