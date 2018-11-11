import { LoadPhotosSuccessAction, PhotoActionTypes } from './photo.actions';

describe('Photo Actions', () => {

  const photo = { albumId: 1, id: 1, title: 'photo1', url: 'https://photo1', thumbnailUrl: 'https://thumb1' };

  it('should create a LoadPhotosSuccessAction', () => {
      const action = new LoadPhotosSuccessAction([ photo ]);
      expect({ ...action }).toEqual({
          type: PhotoActionTypes.LOAD_PHOTOS_SUCCESS,
          payload: [ photo ]
      });
  });

});
