import { $$, browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class HomeMenuPage {
  navigateTo() {
    return browser.get('/');
  }

  getWelcomeText() {
    return element(by.css('.home-menu h1')).getText();
  }

  getAllClickableOptions(): ElementArrayFinder {
    return $$('li a');
  }
}
