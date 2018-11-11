
import { createSelector } from '@ngrx/store';
import { groupBy, keys } from 'lodash';

import { AppState } from '../reducers';
import { Album } from '../model';

export const getAllPhotos = (state: AppState) => state.photos.all;

export const getTotalNumber = (state: AppState) => state.photos.all.length;

export const getAlbum = (albumId: number) => {
  return createSelector(
    getPhotosGroupedByAlbum,
    (albums) => {
      const photos = albums[`${albumId}`];
      return { id: albumId, photos } as Album;
    }
  );
};

const getPhotosGroupedByAlbum = createSelector(
  getAllPhotos,
  photos => groupBy(photos, photo => photo.albumId)
);

export const getAlbumIds = createSelector(
  getPhotosGroupedByAlbum,
  albums => {
    console.log('keys>> ' + JSON.stringify(keys(albums)));
    return keys(albums);
  }
);
