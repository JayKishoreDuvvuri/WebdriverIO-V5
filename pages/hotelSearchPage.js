import basePage from "../pages/basePage";
import locators from "../utils/locators";

const baseUrl = locators.baseUrl,
  cookieButton = locators.cookieButton,
  homePageImage = locators.homePageImage,
  citySearchbox = locators.citySearchbox,
  elementText = locators.elementText,
  submitBtnText = locators.submitBtnText,
  cityasMadrid = locators.cityasMadrid,
  searchSubmitButton = locators.searchSubmitButton,
  cityUrl = locators.cityUrl,
  timeout = locators.timeout;

class hotelSearchPage extends basePage {
  async selectCityAsMadrid() {
    const searchCityBox = await this.findByXPath(cityasMadrid);
    await this.elementIsDisplayed(searchCityBox);
    return await this.click(searchCityBox);
  }

  async selectCity() {
    const searchCityBox = await this.findByXPath(citySearchbox);
    await this.elementIsDisplayed(searchCityBox);
    const enabledState = await this.elementIsEnabled(searchCityBox);
    const fieldText = elementText;
    const searchBox = await browser.waitUntil(async function() {
      return {
        text: fieldText,
        state: enabledState
      };
    }, timeout);
    return searchBox;
  }

  async submitButton() {
    const submitButtonElement = await this.findByXPath(searchSubmitButton);
    const enabledState = await this.elementIsEnabled(submitButtonElement);

    const btnText = await submitButtonElement.getText();
    const btnResult = await browser.waitUntil(async function() {
      return {
        text: btnText,
        state: enabledState
      };
    }, timeout);
    return btnResult;
  }
}
export default new hotelSearchPage();
