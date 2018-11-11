import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Photo } from '../../../../core';

@Component({
  selector: 'photo-thumbnail',
  template: `<img [src]="photo.thumbnailUrl" class="photo-thumbnail" />`,
  styleUrls: ['./photo-thumbnail.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoThumbnailComponent {
  @Input() photo: Photo;
}
