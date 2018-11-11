import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { AppState, getAlbumIds, Breadcrumb } from '../core';

@Component({
  selector: 'select-album',
  templateUrl: './select-album.container.html',
  styleUrls: ['./select-album.container.scss']
})
export class SelectAlbumContainer implements OnDestroy {

  albumIds$: Observable<string[]>;

  breadcrumbs: Breadcrumb[] = [];
  selectedAlbum = '1';

  destroy$: Subject<boolean> = new Subject();

  constructor(private store: Store<AppState>, private router: Router) {
    this.albumIds$ = this.store.pipe(
      select(getAlbumIds),
      takeUntil(this.destroy$)
    );

    this.breadcrumbs = [
      { title: 'Home', routerLink: ['/'] },
      { title: 'Select Album' }
    ];
  }

  selectAlbum({ value: { albumId } }) {
    this.router.navigate([`/albums/${albumId}`]);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
