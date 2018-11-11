import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SelectAlbumContainer } from './select-album.container';
import { reducers } from '../core';

describe('SelectAlbumContainer', () => {
  let component: SelectAlbumContainer;
  let fixture: ComponentFixture<SelectAlbumContainer>;

  // let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [ SelectAlbumContainer ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    // store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAlbumContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
