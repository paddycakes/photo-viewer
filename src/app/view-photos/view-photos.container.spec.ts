import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { ViewPhotosContainer} from './view-photos.container';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../core';
import { PhotoState } from '../core/reducers/photo.reducer';

describe('ViewPhotosComponent', () => {
  let component: ViewPhotosContainer;
  let fixture: ComponentFixture<ViewPhotosContainer>;
  // let state;
  let store;

  const photo1 = { albumId: 1, id: 1, title: 'photo1', url: 'https://photo1', thumbnailUrl: 'https://thumb1' };
  const photo2 = { albumId: 1, id: 2, title: 'photo2', url: 'https://photo2', thumbnailUrl: 'https://thumb2' };
  const photoState: PhotoState = {
    all: [photo1, photo2]
  };

  beforeEach(async(() => {
/*     state = { photos: photoState };
    selectSpy = jasmine.createSpy('select').and.callFake(selectorFunc => {
      return of(selectorFunc.call(store, state));
    }); */

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers)
      ],
      declarations: [ ViewPhotosContainer ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPhotosContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
