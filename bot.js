const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function answer() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())  // TODO Optional: Headless mode
        .build();

    // setup
    await driver.get('https://pollev.com/');

    // time for you to log in
    await driver.sleep(120000); // 2 minutes
    for (let i = 0; i < 90; i++) { // 90 minutes
        try {
            await driver.navigate().refresh();
            await driver.sleep(10000); // 10 seconds
            const firstOption = await driver.findElement(By.className("component-response-multiple-choice__option__vote"));
            await firstOption.click();
            console.log(new Date().toLocaleString() + " - clicked");
        } 
        catch (e) { 
            // time stamp
            console.log(new Date().toLocaleString() + " - didn't click");
        } 

        await driver.sleep(50000); // 50 seconds 
    }
};

module.exports = answer;
