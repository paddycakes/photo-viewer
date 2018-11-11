import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { LoadPhotosGuard } from './load-photos.guard';
import { reducers, AppState } from '../reducers';
import { PhotoProviderService } from '../services';
import { LoadPhotosSuccessAction } from '../actions';
import { Photo } from '../model';

describe('LoadPhotosGuard', () => {

  const photo1 = { albumId: 1, id: 1, title: 'photo1', url: 'https://photo1', thumbnailUrl: 'https://thumb1' };
  const photo2 = { albumId: 1, id: 2, title: 'photo2', url: 'https://photo2', thumbnailUrl: 'https://thumb2' };

  let guard: LoadPhotosGuard;
  let store: Store<AppState>;

  let getAllPhotos: jasmine.Spy;
  let navigate: jasmine.Spy;

  beforeEach(() => {
    getAllPhotos = jasmine.createSpy('getAllPhotos');
    navigate = jasmine.createSpy('navigate');

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers)
      ],
      providers: [
        LoadPhotosGuard,
        {
          provide: PhotoProviderService,
          useValue: {
            getAllPhotos
          }
        },
        {
          provide: Router,
          useValue: {
            navigate
          }
        }
      ]
    });

    guard = TestBed.get(LoadPhotosGuard);
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should resolve to true when there are photos in the store', () => {

    store.dispatch(new LoadPhotosSuccessAction([photo1, photo2]));

    const expected$ = cold('(a|)', { a: true });
    const activate$ = guard.canActivate();

    expect(activate$).toBeObservable(expected$);
  });

  it('should fetch photos remotely when none exist in the store', () => {
    const photos: Photo[] = [photo1, photo2];

    const providedPhotos$ = cold('-(a|)', { a: photos });
    const expected$ =       cold('-(b|)', { b: true });

    const loadPhotoSuccessAction = new LoadPhotosSuccessAction(photos);

    const activate$ = guard.canActivate();

    getAllPhotos.and.returnValue(providedPhotos$);

    expect(activate$).toBeObservable(expected$);
    expect(getAllPhotos).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(loadPhotoSuccessAction);
  });

  it('should reject the activation and redirect when an error occurs during resolution', () => {
    const error$    = cold('-#');
    const expected$ = cold('-(a|)', { a: false });

    const activate$ = guard.canActivate();

    getAllPhotos.and.returnValue(error$);

    expect(activate$).toBeObservable(expected$);
  });

});

