import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CarrouselComponent} from './carrousel.component';

describe('CarrouselContainer', () => {
  let component: CarrouselComponent;
  let fixture: ComponentFixture<CarrouselComponent>;

  const displayPhotos = [
    { albumId: 111, id: 1111, title: 'TITTLE1',  thumbnailUrl: 'THUMBNAIL1', url: 'URL1' },
    { albumId: 112, id: 1112, title: 'TITTLE2',  thumbnailUrl: 'THUMBNAIL2', url: 'URL2' }
  ];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselComponent);
    component = fixture.componentInstance;
    component.photos = displayPhotos;
    fixture.detectChanges();
  });

  it('should get initialised correctly', () => {
    expect(component.photos).toEqual(displayPhotos);
    expect(component.selectedPhotoIndex).toEqual(0);
  });

  it('should change the value of selectedPhotoIndex with load next and previous', () => {
    component.loadNext();
    expect(component.selectedPhotoIndex).toEqual(1);
    component.loadPrevious();
    expect(component.selectedPhotoIndex).toEqual(0);
  });

});
