import basePage from "../pages/basePage";
import locators from "../utils/locators";

const baseUrl = locators.baseUrl,
  cookieButton = locators.cookieButton,
  homePageImage = locators.homePageImage,
  departureDate = locators.departureDate,
  startCalenderRightArrow = locators.startCalenderRightArrow,
  searchCity = locators.searchCity,
  elementText = locators.elementText,
  submitBtnText = locators.submitBtnText,
  td = locators.td,
  depDateValue = locators.depDateValue,
  retDateValue = locators.retDateValue,
  datePickerListStart = locators.datePickerListStart,
  datePickersecondTable = locators.datePickersecondTable,
  datePickerListEnd = locators.datePickerListEnd,
  hotelPageSubmitButton = locators.hotelPageSubmitButton,
  timeout = locators.timeout;

class hotelsPage extends basePage {
  constructor() {
    super(`${baseUrl}/hotels`, timeout);
  }

  async open() {
    super.open();
    super.waitForPageToLoad(homePageImage);
  }

  async CookieButtonIsEnabled() {
    let cookieBtn = await this.findById(cookieButton);
    const isEnabled = await this.elementIsEnabled(cookieBtn);
    return isEnabled;
  }

  async selectCity() {
    const searchCityBox = await this.findByXPath(searchCity);
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

  async setDepartureDate() {
    return await this.fromDatePicker();
  }

  async setReturnDate() {
    return await this.toDatePicker();
  }

  async submitButton() {
    const submitButtonElement = await this.findByXPath(hotelPageSubmitButton);

    const enabledState = await this.elementIsEnabled(submitButtonElement);

    const buttonText = await this.findByCss(submitBtnText);
    const btnText = await buttonText.getText();

    const btnResult = await browser.waitUntil(async function() {
      return {
        text: btnText,
        state: enabledState
      };
    }, timeout);
    return btnResult;
  }

  async fromDatePicker() {
    //Click and open the datepickers and this is for 'Departure/Start' date picker table
    let dateWidgetFrom = await this.findByXPath(departureDate);
    await this.click(dateWidgetFrom);

    let clickArrowButton = await this.findByXPath(startCalenderRightArrow);
    await this.click(clickArrowButton);

    let dateWidget = await this.findByCss(datePickerListStart);

    let isDisplayed = await this.elementIsDisplayed(dateWidget);

    //This are the columns of the from date picker table
    let columns = await dateWidget.$$(td);

    //DatePicker is a table. Thus we can navigate to each cell
    //and if a cell matches with the current date then we will click it
    for (let cell of columns) {
      const text = await cell.getText();
      if (text === depDateValue) {
        cell.click();
        break;
      }
    }
    return isDisplayed;
  }

  async toDatePicker() {
    //Click and open the datepickers and this is for 'Return' date picker table
    let datesecondTable = await this.findByCss(datePickersecondTable);
    await this.elementIsDisplayed(datesecondTable);

    let dateWidget = await this.findByCss(datePickerListEnd);

    let isDisplayed = await this.elementIsDisplayed(dateWidget);

    //This are the columns of the from date picker table
    let columns = await dateWidget.$$(td);

    //DatePicker is a table. Thus we can navigate to each cell
    //and if a cell matches with the current date then we will click it.
    for (let cell of columns) {
      const text = await cell.getText();
      if (text === retDateValue) {
        cell.click();
        break;
      }
    }
    return isDisplayed;
  }
}
export default new hotelsPage();
