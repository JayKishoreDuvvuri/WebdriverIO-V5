import homePage from "../pages/homePage";
import locators from "../utils/locators";

const baseUrl = locators.baseUrl,
  cookieButton = locators.cookieButton,
  hotelCity = locators.hotelCity,
  getTitle = locators.getTitle,
  searchCity = locators.searchCity,
  elementText = locators.elementText,
  submitButtonText = locators.submitButtonText,
  submitBtnUrl = locators.submitBtnUrl,
  submitButtonXpath = locators.submitButtonXpath;

// ### 1. Launch the Application
// ### 2. Enter City name as "Madrid"
// ### 3. Select departure date as '25.11.2019' and return date as '29.11.2019'
// ### 4. Click on the Submit Button
// ### 5. User is navigated to Hotel selection Page in the city Madrid
// ### 6. Check the five star icon (Sterne) is displayed and click on it
// ### 7. Check the review rating (Bewertung) is displayed and click on it
// ### 8. Sort the results by price descending (Preis)

describe("Automation test for short trip scenario to Madrid for 2 Adults", function() {
  before(async function() {
    await homePage.open();
  });

  it("Check the title of the page", async function() {
    const homepage = await browser.getUrlAndTitle();
    expect(homepage.title).to.contains(getTitle);
    expect(homepage.url).to.contains(baseUrl);
  });

  it("Verify whether the cookie Button is enabled and click on it on home page", async function() {
    const isEnabled = await homePage.CookieButtonIsEnabled();
    await browser.waitAndClick(cookieButton);
    expect(isEnabled).to.be.true;
  });

  it("Select the menu item HotelCity option", async function() {
    const isDisplayed = await homePage.HotelCityIsDisplayed();
    await browser.waitAndClick(hotelCity);
    expect(isDisplayed).to.equal(true);
  });

  it("Enter City as Madrid in the Search box and check whether it is Enabled", async function() {
    let searchCityBox = await homePage.selectCity();
    await browser.waitAndSendKeys(searchCity, elementText);
    expect(searchCityBox.state).to.be.true;
    expect(searchCityBox.text).to.equal(elementText);
  });

  it("Select the Departure and Return date for the Journey", async function() {
    let isDisplayed = await homePage.setDepartureDate();
    expect(isDisplayed).to.be.true;

    await homePage.setReturnDate();
    expect(isDisplayed).to.equal(true);
  });

  it("Verify submit button's text and it's state is enabled", async function() {
    const result = await homePage.submitButton();
    expect(result.state).to.be.true;
    expect(result.buttonText).to.equal(submitButtonText);
  });

  it("Click on submit button and verify the url", async function() {
    await browser.waitAndClick(submitButtonXpath);
    const page = await browser.getUrlAndTitle();
    expect(page.url).to.equal(submitBtnUrl);
  });
});
