import { TestBed, async, inject } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { LoadPhotosGuard } from './load-photos.guard';
import { reducers, AppState } from '../reducers';
import { PhotoProviderService } from '../services';

describe('LoadPhotosGuard', () => {
  let guard: LoadPhotosGuard;
  let store: Store<AppState>;

  let getAllPhotos: jasmine.Spy;

  beforeEach(() => {
    getAllPhotos = jasmine.createSpy('getAllPhotos');

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
        }
      ]
    });

    guard = TestBed.get(LoadPhotosGuard);
    store = TestBed.get(Store);
  });

/*   it('should ...', inject([LoadPhotosGuard], (guard: LoadPhotosGuard) => {
    expect(guard).toBeTruthy();
  })); */
});
