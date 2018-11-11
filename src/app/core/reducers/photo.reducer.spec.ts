import { photoReducer, PhotoState } from './photo.reducer';
import { LoadPhotosSuccessAction } from '../actions';

describe('photoReducer', () => {
  const state: PhotoState = {
    all: []
  };

  const photo1 = { albumId: 1, id: 1, title: 'photo1', url: 'https://photo1', thumbnailUrl: 'https://thumb1' };
  const photo2 = { albumId: 1, id: 2, title: 'photo2', url: 'https://photo2', thumbnailUrl: 'https://thumb2' };

  it('should not contain any photos when none have been loaded', () => {
    const noPhotos = [];
    const actual = photoReducer(state, new LoadPhotosSuccessAction(noPhotos));
    expect(actual.all.length).toBe(0);
  });

  it('should return all photos that have been loaded', () => {
    const actual =  photoReducer(state, new LoadPhotosSuccessAction([photo1, photo2]));
    expect(actual.all.length).toBe(2);
    expect(actual.all[0]).toBe(photo1);
  });

});
