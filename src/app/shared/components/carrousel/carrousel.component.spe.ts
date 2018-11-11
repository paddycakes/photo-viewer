/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { of } from 'rxjs/observable/of';

import { CarrouselComponent} from './carrousel.component';
// import { JsonPlaceholderService } from '../services/photos.service';

// let mockJsonPlaceholderService: jasmine.Spy;

// TODO: CORRECT FILENAME !!!

/* describe('CarrouselContainer', () => {
  let component: CarrouselComponent;
  let fixture: ComponentFixture<CarrouselComponent>;
  // let service: JsonPlaceholderService;
  const testPhotosData = [
    { albumId: 111, id: 1111, title: 'TITTLE1',  thumbnailUrl: 'THUMBNAIL1', url: 'URL1' },
    { albumId: 112, id: 1112, title: 'TITTLE2',  thumbnailUrl: 'THUMBNAIL2', url: 'URL2' }
  ];


  beforeEach(async(() => {
    // mockJsonPlaceholderService = jasmine.createSpy('getAllPhotos')
    //   .and.returnValue(of(testPhotosData));
    initComponent();
  }));

  beforeEach(() => {
    // service = TestBed.get(JsonPlaceholderService);
    fixture = TestBed.createComponent(CarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Data gets initialised correctly', () => {
    expect(component.photos).toEqual(testPhotosData);
    expect(component.selectedPhotoIndex).toEqual(0);
  });

  it('load next and previous change the value of selectedPhotoIndex', () => {
    component.loadNext();
    expect(component.selectedPhotoIndex).toEqual(1);
    component.loadPrevious();
    expect(component.selectedPhotoIndex).toEqual(0);
  });

});

function initComponent() {
  TestBed.configureTestingModule({
    declarations: [ CarrouselComponent ],
    schemas: [NO_ERRORS_SCHEMA],
     providers: [
      {
        provide: JsonPlaceholderService,
        useValue: {
          getAllPhotos: mockJsonPlaceholderService
        }
      }
    ]
  })
  .compileComponents();
}*/
