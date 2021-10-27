const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function testResultPageTitle(){
    //var searchString = "Automated testing with Selenium";
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://bacit.info");
    //await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);
    var title = await driver.getTitle();
    console.log("Title is:", title);
    await driver.quit();
}
testResultPageTitle();

