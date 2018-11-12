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
  let store;

  beforeEach(async(() => {
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
