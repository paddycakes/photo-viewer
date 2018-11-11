import { $, $$, browser, by, element, ElementFinder, protractor } from 'protractor';

export class SelectAlbumPage {
  navigateTo() {
    return browser.get('/albums');
  }

  getSelectAlbumText() {
    return element(by.css('h3')).getText();
  }

  selectAlbum(albumId: number) {
    element.all(by.tagName('option')).get(albumId - 1).click();
  }

  submitSelection() {
    return this.getSubmitButton().click();
  }

  getSubmitButton() {
    return $('button');
  }

}
