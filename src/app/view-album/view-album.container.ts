import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map, switchMap } from 'rxjs/operators';

import { AppState, Photo, getAllPhotos, getAlbum, Album, Breadcrumb } from '../core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-album',
  template: `
    <breadcrumbs
      [breadcrumbs]="breadcrumbs">
    </breadcrumbs>
    <div class="view-album">
      <div class="album-details" *ngIf="(album$ | async).photos">
        Album {{ (album$ | async).id }} has {{ (album$ | async).photos.length }} photos
      </div>
      <carrousel
        [photos]="(album$ | async).photos">
      </carrousel>'
    </div>
  `,
  styleUrls: ['./view-album.scss']
})
export class ViewAlbumContainer implements OnDestroy {

  // TODO: If album not in store, then output an error message.
  // Photos will already have been loaded by the LoadPhotosGuard.
  // Mention deep-linking in doc.

  album$: Observable<Album>;

  breadcrumbs: Breadcrumb[];

  destroy$: Subject<boolean> = new Subject();

  constructor(private store: Store<AppState>,
    private activatedRoute: ActivatedRoute) {
      this.album$ = activatedRoute.paramMap.pipe(
        map(params => params.get('id')),
        switchMap(id => this.store.pipe(
          select(getAlbum(Number(id)),
          takeUntil(this.destroy$)
        ))
      )
    );

    this.breadcrumbs = [
      { title: 'Home', routerLink: ['/'] },
      { title: 'View Album Photos' }
    ];
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
