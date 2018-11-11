import { Component, Input } from '@angular/core';

import { Photo } from '../../../core';

@Component({
  selector: 'carrousel',
  template: `
  <div class="carrousel" *ngIf="photos.length">
    <div class="counter">
      Viewing Photo {{ selectedPhotoIndex + 1 }} of {{ photos.length }}
    </div>
    <div class="photo-thumbnail-container">
      <photo-thumbnail
        *ngIf="selectedPhotoIndex !== 0"
        (click)="loadPrevious()"
        [photo]="photos[selectedPhotoIndex - 1]">
      </photo-thumbnail>
    </div>
    <div class="photo-full-size-container">
      <photo-full-size
        [photo]="photos[selectedPhotoIndex]">
      </photo-full-size>
    </div>
    <div class="photo-thumbnail-container">
      <photo-thumbnail
        *ngIf="selectedPhotoIndex !== (photos.length -1)"
        (click)="loadNext()"
        [photo]="photos[selectedPhotoIndex + 1]">
      </photo-thumbnail>
    </div>
    <div class="clearfix"></div>
  </div>
  `,
  styleUrls: ['./carrousel.scss']
})
export class CarrouselComponent {
  @Input() photos: Photo[] = [];

  selectedPhotoIndex = 0;

  loadNext() {
    this.selectedPhotoIndex++;
  }

  loadPrevious() {
    this.selectedPhotoIndex--;
  }

}
