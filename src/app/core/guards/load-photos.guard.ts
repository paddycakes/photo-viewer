import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { take, map, switchMap, catchError, tap } from 'rxjs/operators';

import { PhotoProviderService } from '../services';
import { AppState } from '../reducers';
import { getAllPhotos } from '../selectors';
import { LoadPhotosSuccessAction } from '../actions';

@Injectable()
export class LoadPhotosGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private photoProviderService: PhotoProviderService
) {}

  arePhotosInStore(): Observable<boolean> {
    return this.store.pipe(
        select(getAllPhotos),
        map(photos => photos && photos.length > 0),
        take(1)
      );
  }

  populateStoreWithPhotos(): Observable<boolean> {
    return this.photoProviderService.getAllPhotos()
      .pipe(
        map(photos => new LoadPhotosSuccessAction(photos)),
        tap(action => this.store.dispatch(action)),
        map(Boolean),
        catchError(() => {
          return of(false);
        })
      );
  }

  canActivate(): Observable<boolean> {
    return this.arePhotosInStore()
      .pipe(
        switchMap(inStore => {
          if (inStore) {
            return of(inStore);
          }
          return this.populateStoreWithPhotos();
        })
      );
  }

}
