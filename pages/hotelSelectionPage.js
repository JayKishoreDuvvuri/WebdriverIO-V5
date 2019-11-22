import basePage from "../pages/basePage";
import locators from "../utils/locators";

const fiveStarItem = locators.fiveStarItem,
  reviewRating = locators.reviewRating,
  priceItem = locators.priceItem,
  priceClassDesc = locators.priceClassDesc,
  timeout = locators.timeout,
  selectHotel = locators.selectHotel;

class hotelSelectionPage extends basePage {
  async selectFiveStars() {
    let fiveStarIcon = await this.findByXPath(fiveStarItem);
    await this.click(fiveStarIcon);
    return fiveStarIcon.isDisplayed();
  }

  async reviewRating() {
    let reviewRatingIcon = await this.findByXPath(reviewRating);
    await this.click(reviewRatingIcon);
    return reviewRatingIcon.isDisplayed();
  }

  async price() {
    let priceTab = await this.findByCss(priceItem);
    await this.click(priceTab);
    return priceTab.isDisplayed();
  }

  async priceValueDesc() {
    let priceTab = await this.findByCss(priceItem);
    await this.elementIsDisplayed(priceTab);
    await this.click(priceTab);

    let priceClass = await this.findByXPath(priceClassDesc);
    return priceClass.isDisplayed();
  }

  async selectHotel() {
    let hotelSelected = await this.findByXPath(selectHotel);
    await this.elementIsEnabled(hotelSelected);

    const enabledState = await hotelSelected.isEnabled();
    const btnText = await hotelSelected.getText();

    const btnResult = await browser.waitUntil(async function() {
      return {
        buttonText: btnText,
        state: enabledState
      };
    }, timeout);
    return btnResult;
  }

  async clickHotel() {
    let hotelSelected = await this.findByXPath(selectHotel);
    await this.click(hotelSelected);

    const parentWindow = await browser.getWindowHandle();
    const allWindows = await browser.getWindowHandles();

    for (var currentWindow of allWindows) {
      if (!(currentWindow === parentWindow)) {
        return await browser.switchToWindow(currentWindow);
      }
    }
  }
}
export default new hotelSelectionPage();
