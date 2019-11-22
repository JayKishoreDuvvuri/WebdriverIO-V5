import hotelsPage from "../pages/hotelsPage";
import hotelSearchPage from "../pages/hotelSearchPage";
import hotelSelectionPage from "../pages/hotelSelectionPage";
import locators from "../utils/locators";

const baseUrl = locators.baseUrl,
  cookieButton = locators.cookieButton,
  getTitle = locators.getTitle,
  searchCity = locators.searchCity,
  elementText = locators.elementText,
  submitButtonText = locators.submitButtonText,
  submitBtnUrl = locators.submitBtnUrl,
  redirectingLink = locators.redirectingLink,
  redirectingUrl = locators.redirectingUrl,
  hotelPageSubmitButton = locators.hotelPageSubmitButton,
  citySearchbox = locators.citySearchbox,
  searchSubmitUrl = locators.searchSubmitUrl,
  cityUrl = locators.cityUrl,
  hotelOffersButton = locators.hotelOffersButton,
  detailsPageUrl = locators.detailsPageUrl,
  searchSubmitButton = locators.searchSubmitButton;

// ### 1. Launch the Application
// ### 2. Enter City name as "Madrid"
// ### 3. Select departure date as '25.12.2019' and return date as '29.12.2019'
// ### 4. Click on the Submit Button
// ### 5. User is navigated to Hotel selection Page in the city Madrid
// ### 6. Check the five star icon (Sterne) is displayed and click on it
// ### 7. Check the review rating (Bewertung) is displayed and click on it
// ### 8. Sort the results by price descending (Preis)
// ### 9. Select a Hotel
// ### 10. User is navigated to the Hotel Details Page

describe("Automation test for short trip scenario to Madrid for 2 Adults", function() {
  before(async function() {
    await hotelsPage.open();
  });

  it("Check the title of the page", async function() {
    const page = await browser.getUrlAndTitle();
    expect(page.title).to.contains(getTitle);
    expect(page.url).to.contains(baseUrl);
  });

  it("Verify whether the cookie Button is enabled and click on it on home page", async function() {
    const isEnabled = await hotelsPage.CookieButtonIsEnabled();
    await browser.waitAndClick(cookieButton);
    expect(isEnabled).to.be.true;
  });

  it("Enter City as Madrid in the Search box and check whether it is Enabled", async function() {
    let searchCityBox = await hotelsPage.selectCity();
    await browser.waitAndSendKeys(searchCity, elementText);
    expect(searchCityBox.state).to.be.true;
    expect(searchCityBox.text).to.equal(elementText);
  });

  it("Select the Departure and Return date for the Journey", async function() {
    let isDisplayed = await hotelsPage.setDepartureDate();
    expect(isDisplayed).to.be.true;

    await hotelsPage.setReturnDate();
    expect(isDisplayed).to.equal(true);
  });

  it("Verify submit button's text and it's state is enabled", async function() {
    const result = await hotelsPage.submitButton();
    expect(result.state).to.be.true;
    expect(result.text).to.equal(submitButtonText);
  });

  it("Click on submit button and verify the url", async function() {
    await browser.waitAndClick(hotelPageSubmitButton);
    const page = await browser.getUrlAndTitle();
    expect(page.url).to.equal(submitBtnUrl);
  });

  it("Click on Re-directing link to go back again to hotels page", async function() {
    await browser.waitAndClick(redirectingLink);
    const page = await browser.getUrlAndTitle();
    expect(page.url).to.equal(redirectingUrl);
  });

  it("Enter City as Madrid in the Search box and check whether it is Enabled on Hotel search Main page", async function() {
    let searchCityBox = await hotelSearchPage.selectCity();
    await browser.waitAndSendKeys(citySearchbox, elementText);
    expect(searchCityBox.state).to.be.true;
    expect(searchCityBox.text).to.equal(elementText);
  });

  it("Verify submit button's text and it's state is enabled on Hotel search Main page", async function() {
    const result = await hotelSearchPage.submitButton();
    expect(result.text).to.equal(submitButtonText);
    expect(result.state).to.be.true;
  });

  it("Click on submit button and verify the url on Hotel search Main Page", async function() {
    await browser.waitAndClick(searchSubmitButton);
    const page = await browser.getUrlAndTitle();
    expect(page.url).to.contains(searchSubmitUrl);
  });

  it("Select city as Madrid", async function() {
    await hotelSearchPage.selectCityAsMadrid();
    const page = await browser.getUrlAndTitle();
    expect(page.url).to.contains(cityUrl);
  });

  it("Click on five star rating (sterne) icon", async function() {
    const isDisplayed = await hotelSelectionPage.selectFiveStars();
    expect(isDisplayed).to.be.true;
  });

  it("Click on best review rating (Bewertung) icon", async function() {
    const isDisplayed = await hotelSelectionPage.reviewRating();
    expect(isDisplayed).to.be.true;
  });

  it("Click on price tab to see the price in descending order", async function() {
    let isDisplayed = await hotelSelectionPage.price();
    expect(isDisplayed).to.be.true;

    isDisplayed = await hotelSelectionPage.priceValueDesc();
    expect(isDisplayed).to.be.true;
  });

  it("Verify 'Zum Angebote' button is enabled to select the hotel on the 'Hotelauswahl page'", async function() {
    const result = await hotelSelectionPage.selectHotel();
    expect(result.state).to.be.true;
    expect(result.buttonText).to.equal(hotelOffersButton);
  });

  it("Click on the selected hotel and user is navigated to 'Hotel Details page'", async function() {
    await hotelSelectionPage.clickHotel();
    const page = await browser.getUrlAndTitle();
    expect(page.url).to.contains(detailsPageUrl);
  });
});
