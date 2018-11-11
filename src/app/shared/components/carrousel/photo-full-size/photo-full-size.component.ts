import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Photo } from '../../../../core';

@Component({
  selector: 'photo-full-size',
  template: `
    <img [src]="photo.url" />
    <p>{{photo.title}}</p>
   `,
   styleUrls: ['./photo-full-size.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoFullSizeComponent {
  @Input() photo: Photo;
}
