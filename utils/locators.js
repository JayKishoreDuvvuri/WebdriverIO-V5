module.exports = {
  // Start Page Locators
  waitforTimeout: 10000,
  baseUrl: "https://www.ab-in-den-urlaub.de/",
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  mochaTimeout: 60000,
  homePageImage: "#header > div.title-image",
  explicitWaitMS: 5000,
  cookieButton: "#CybotCookiebotDialogBodyButtonAccept",
  getTitle: "ab-in-den-urlaub.de",
  hotelCity:
    "#formSearch > div.form-selection.formSelection > label.item-hotel",
  searchCity: "//input[@id='base[searchTerm]']",
  elementText: "Madrid",
  depDateValue: "25",
  retDateValue: "29",
  datePickerListStart:
    "div.datepicker-layer.start-input > div.datepicker-wrapper > div > div",
  startDateRightArrow:
    "(//span[@class='month-button month-button-next icon-arrow-right-bold'])[2]",
  datePickerListEnd:
    "div.datepicker-layer.end-input > div.datepicker-wrapper > div > div",
  datePickersecondTable: "div.datepicker-layer.end-input",
  startDate: "(//div[@class='datepicker-trigger'])[3]",
  endDate: "(//div[@class='datepicker-trigger'])[4]",
  submitButtonXpath: "(//input[@id='submit'])[2]",
  // submitButtonCss: "input#submit:not(.postPop)",
  submitButton: "#hotel div.button-submit.form-submit input#submit",
  td: "<td />",
  fiveStarItem: "//span[@class='select-icon hc-icon-star-50']",
  reviewRating: "//span[@class='hc-icon-smiley-5 icon']",
  priceItem: "div.selectWrapper.show-for-xlarge > ul > li:nth-child(2)",
  priceClassDesc:
    "//li[@class='js-baseFrame-sortElement js-baseFrame-sort-icon active changeDirection desc']",
  timeout: 5000,
  submitButtonText: "Angebote suchen",
  buttonText:
    "#hotel > div.form > div.form-footer > div.form-submit-button > div > span",
  submitBtnUrl:
    "https://hotels.ab-in-den-urlaub.de/de/EUR/hotels/Madrid/arr/2019-12-25/dep/2019-12-29/adults/2/children/-1/-1/-1/rooms/1",

  // Hotels Page Locators
  departureDate: "(//div[@class='datepicker-trigger'])[1]",
  startCalenderRightArrow:
    "//span[@class='month-button month-button-next icon-arrow-right-bold']",
  hotelPageSubmitButton: "//input[@id='submit']",
  submitBtnText: "div.button-submit.form-submit > span",
  redirectingLink: "#pageWrapper > div > div:nth-child(1) > h4 > a",
  redirectingUrl: "https://hotels.ab-in-den-urlaub.de/",
  citySearchbox: "#mainsearch_baseSearchTerm",
  baseArrivalDate: "#mainsearch_baseArrivalDate",
  calendarDateBody:
    "#ui-datepicker-div > div.ui-datepicker-group.ui-datepicker-group-first > table > tbody",
  calendarTable: "#ui-datepicker-div",
  searchSubmitButton: "div.searchSubmit > button",
  cityasMadrid:
    "div > div:nth-child(2) > div.hc-box__body > ul > li:nth-child(1) > a",
  searchSubmitUrl: "https://hotels.ab-in-den-urlaub.de/de/EUR/search/search?",
  cityUrl: "https://hotels.ab-in-den-urlaub.de/de/EUR/hotels/Madrid/",

  // Hotel Selection Page Locators
  enterCountryBox: "//input[@id='idestflat' and @class='aiduac-0']",
  countryText: "Mallorca",
  searchSubmit: "#submit",
  hotelSelectionUrl:
    "https://www.ab-in-den-urlaub.de/iberl/hotels/depAirport/5000%2C5001%2C5002%2C5003/idestflat/Mallorca",
  selectHotel:
    "//a[@class='expand bold cta expanded button' and contains(@href,'https://hotels.ab-in-den-urlaub.de/de/EUR/hotel/The%20Westin%20Palace%2C%20Madrid/mh/6573889/overview/arr/2019-12-05/dep/2019-12-06/adults/2/children/-1/-1/-1/rooms/1?pstn=1&rdr=price&')]",
  hotelOffersButton: "Zum Angebot",

  // Hotel Details Page Locators
  hotelTitle: "//div[@class='_styling-h1 hotel-name']",
  datesAndPriceLink: "#tab-widget-item-price > a",
  hotelImage: "div.media-large > img",
  detailsPageUrl:
    "https://hotels.ab-in-den-urlaub.de/de/EUR/hotel/The%20Westin%20Palace"
};
