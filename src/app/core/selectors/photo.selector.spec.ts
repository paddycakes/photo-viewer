import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { AppState, reducers } from '../reducers';
import { Photo, Album } from '../model';
import { getAllPhotos, getTotalNumber, getAlbum } from './photo.selector';
import { LoadPhotosSuccessAction } from '../actions';

let store: Store<AppState>;

const photos: Photo[] = [
  { albumId: 1, id: 1, title: 'photo1', url: 'https://photo1', thumbnailUrl: 'https://thumb1' },
  { albumId: 1, id: 2, title: 'photo2', url: 'https://photo2', thumbnailUrl: 'https://thumb2' },
  { albumId: 2, id: 3, title: 'photo3', url: 'https://photo3', thumbnailUrl: 'https://thumb3' },
  { albumId: 2, id: 4, title: 'photo4', url: 'https://photo4', thumbnailUrl: 'https://thumb4' },
  { albumId: 2, id: 5, title: 'photo5', url: 'https://photo5', thumbnailUrl: 'https://thumb5' },
  { albumId: 3, id: 6, title: 'photo6', url: 'https://photo6', thumbnailUrl: 'https://thumb6' }
];

const noPhotos = [];

describe('Photo selectors', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers)
      ]
    });

    store = TestBed.get(Store);
  });

  it('should return all photos', () => {
    let result;

    store
      .select(getAllPhotos)
      .subscribe(value => result = value);

    expect(result).toEqual(noPhotos);

    store.dispatch(new LoadPhotosSuccessAction(photos));

    expect(result).toEqual(photos);
  });

  it('should return the total number of photos', () => {
    let result;

    store
      .select(getTotalNumber)
      .subscribe(value => result = value);

    store.dispatch(new LoadPhotosSuccessAction(photos));

    expect(result).toEqual(6);
  });

  it('should return only the photos in the requested album', () => {
    let result: Album;

    const expectedAlbum: Album = {
      id: 2,
      photos: [
        { albumId: 2, id: 3, title: 'photo3', url: 'https://photo3', thumbnailUrl: 'https://thumb3' } as Photo,
        { albumId: 2, id: 4, title: 'photo4', url: 'https://photo4', thumbnailUrl: 'https://thumb4' } as Photo,
        { albumId: 2, id: 5, title: 'photo5', url: 'https://photo5', thumbnailUrl: 'https://thumb5' } as Photo
      ]
    };

    store
      .select(getAlbum(2))
      .subscribe(value => result = value);

    store.dispatch(new LoadPhotosSuccessAction(photos));

    expect(result.photos.length).toEqual(3);
    expect(result).toEqual(expectedAlbum);
  });

});
