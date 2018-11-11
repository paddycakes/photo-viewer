import { browser } from 'protractor';
import { ViewPhotosPage } from '../pages/view-photos.po';
import { HomeMenuPage } from '../pages/home-menu.po';
import { SelectAlbumPage } from '../pages/select-album.po';
import { ViewAlbumPage } from '../pages/view-album.po';


const assertOnHomeMenuPage = (page: HomeMenuPage): void => {
  expect(browser.getCurrentUrl()).toMatch('/');
};

const assertWelcomeMessageIsDisplayed = (page: HomeMenuPage): void => {
  expect(page.getWelcomeText()).toEqual('Welcome to the Mimecast Photo Viewer');
};

const assertTwoClickableOptions = (page: HomeMenuPage): void => {
  expect(page.getAllClickableOptions().count()).toEqual(2);
};

const assertOnViewPhotosPage = (page: ViewPhotosPage): void => {
  expect(browser.getCurrentUrl()).toMatch('/photos');
};

const assertCarrouselViewerIsDisplayed = (page: ViewPhotosPage): void => {
  expect(page.getSelectedPhoto()).toBeDefined();
};

const assertCorrectCounterText = (page: ViewPhotosPage): void => {
  expect(page.getCounterText()).toEqual('Viewing Photo 1 of 5000');
};

const assertOnlyNextThumbnailIsDisplayed = (page: ViewPhotosPage): void => {
  expect(page.getNextThumbnail()).toBeDefined();
  expect(page.getAllThumbnails().count()).toEqual(1);
};

const assertBothPreviousAndNextThumbnailsAreDisplayed = (page: ViewPhotosPage): void => {
  expect(page.getPreviousThumbnail()).toBeDefined();
  expect(page.getNextThumbnail()).toBeDefined();
  expect(page.getAllThumbnails().count()).toEqual(2);
};

const assertOnSelectAlbumPage = (page: SelectAlbumPage): void => {
  expect(browser.getCurrentUrl()).toMatch('/albums');
};

const assertSelectAlbumText = (page: SelectAlbumPage): void => {
  expect(page.getSelectAlbumText()).toEqual('Please pick your favourite photo album from the list below:');
};

const assertOnViewAlbumPage = (page: ViewAlbumPage, albumId: number): void => {
  expect(browser.getCurrentUrl()).toMatch(`/albums/${albumId}`);
  expect(page.getAlbumDetailsText()).toEqual(`Album ${albumId} has 50 photos`);
};

export {
  assertOnHomeMenuPage,
  assertWelcomeMessageIsDisplayed,
  assertTwoClickableOptions,
  assertOnViewPhotosPage,
  assertCarrouselViewerIsDisplayed,
  assertCorrectCounterText,
  assertOnlyNextThumbnailIsDisplayed,
  assertBothPreviousAndNextThumbnailsAreDisplayed,
  assertOnSelectAlbumPage,
  assertSelectAlbumText,
  assertOnViewAlbumPage
};
