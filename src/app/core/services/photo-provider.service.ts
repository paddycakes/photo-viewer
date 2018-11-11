import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Photo } from '../model';

@Injectable()
export class PhotoProviderService {

  constructor(private http: HttpClient) { }

  getAllPhotos(): Observable<Photo[]> {
    return this.http
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }

}
