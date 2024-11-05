(async () => {
    // Launch the browser
    const browser = await chromium.launch({ headless: false }); // Set headless: true to run without UI
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to Amazon homepage
    await page.goto()

    // Optional: Wait for a few seconds to see the page
    await page.waitForTimeout(5000); // Wait for 5 seconds

    await landingpage.searchbutton.click()
    
    
    
    // Close the browser
    await browser.close();
})();