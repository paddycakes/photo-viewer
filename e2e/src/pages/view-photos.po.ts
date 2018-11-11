import { $, $$, browser, by, element, ElementFinder, protractor } from 'protractor';

export class ViewPhotosPage {
  navigateTo() {
    return browser.get('/photos');
  }

  getSelectedPhoto() {
    return element(by.css('photo-full-size'));
  }

  getAllThumbnails() {
    return element.all(by.css('photo-thumbnail'));
  }

  getCounterText() {
    return element(by.css('.counter')).getText();
  }

  getPreviousThumbnail(): ElementFinder {
    return $('[data-role="previous"]');
  }

  getNextThumbnail(): ElementFinder {
    return $('[data-role="next"]');
  }

  clickNextThumbnail() {
    this.waitUntilLoaded();
    return element(by.css('#next')).click();
  }

  private waitUntilLoaded() {
    return browser.driver.wait(protractor.ExpectedConditions.visibilityOf($('#next')));
  }

}
