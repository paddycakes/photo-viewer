import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

import { Breadcrumb } from '../../../core';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.html',
  styleUrls: ['breadcrumbs.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: Breadcrumb[] = [];
}
