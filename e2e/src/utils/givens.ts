import { ViewPhotosPage } from '../pages/view-photos.po';
import { SelectAlbumPage } from '../pages/select-album.po';

const givenNextThumbnailIsClicked = (page: ViewPhotosPage): void => {
  page.clickNextThumbnail();
};

const givenUserHasSelectedAlbum = (page: SelectAlbumPage, albumId: number): void => {
  page.selectAlbum(albumId);
};

export {
  givenNextThumbnailIsClicked,
  givenUserHasSelectedAlbum
};
