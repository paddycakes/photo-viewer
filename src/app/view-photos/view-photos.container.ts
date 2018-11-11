import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppState, Photo, getAllPhotos, Breadcrumb } from '../core';

@Component({
  selector: 'view-photos',
  template: `
    <breadcrumbs
      [breadcrumbs]="breadcrumbs">
    </breadcrumbs>
    <div class="view-photos">
      <carrousel
        [photos]="(photos$ | async)">
      </carrousel>'
    </div>
  `
})
export class ViewPhotosContainer implements OnDestroy {
  photos$: Observable<Photo[]>;

  breadcrumbs: Breadcrumb[];

  destroy$: Subject<boolean> = new Subject();

  constructor(private store: Store<AppState>) {
    this.photos$ = this.store.pipe(
      select(getAllPhotos),
      takeUntil(this.destroy$)
    );

    this.breadcrumbs = [
      { title: 'Home', routerLink: ['/'] },
      { title: 'View All Photos' }
    ];
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  // TODO: Put a bit more in the template, eg. some text, etc

}
