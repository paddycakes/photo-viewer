import { $, $$, browser, by, element, ElementFinder, protractor } from 'protractor';

export class ViewAlbumPage {

  constructor(private albumId: number) {}

  navigateTo() {
    return browser.get(`/albums/${this.albumId}`);
  }

  getAlbumDetailsText() {
    return element(by.css('.album-details')).getText();
  }

}
