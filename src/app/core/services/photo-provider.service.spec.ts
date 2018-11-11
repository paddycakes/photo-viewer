import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { PhotoProviderService } from './photo-provider.service';

describe('PhotoProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoProviderService],
      imports: [HttpClientTestingModule]
    });

    // service = TestBed.get(PhotoProviderService);
    // httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: PhotoProviderService = TestBed.get(PhotoProviderService);
    expect(service).toBeTruthy();
  });
});
