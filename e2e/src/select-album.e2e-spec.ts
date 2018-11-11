
import { SelectAlbumPage } from './pages/select-album.po';
import { ViewAlbumPage } from './pages/view-album.po';
import {
  assertOnSelectAlbumPage, assertSelectAlbumText, assertOnViewAlbumPage
} from './utils/assertions';
import { givenUserHasSelectedAlbum } from './utils/givens';

describe('Select Album Page', () => {
  let page: SelectAlbumPage;
  let viewAlbumPage: ViewAlbumPage;

  const albumId = 2;

  beforeEach(() => {
    page = new SelectAlbumPage();
    viewAlbumPage = new ViewAlbumPage(albumId);
    page.navigateTo();
  });

  it('should be able to navigate to select album page', () => {
    assertOnSelectAlbumPage(page);
  });

  it('should display correct select album text', () => {
    assertSelectAlbumText(page);
  });

  it('should navigate to view album page when user has selected an album to view', () => {
    givenUserHasSelectedAlbum(page, albumId);
    page.submitSelection();
    assertOnViewAlbumPage(viewAlbumPage, albumId);
  });

});
