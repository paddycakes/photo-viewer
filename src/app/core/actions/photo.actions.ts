import { Action } from '@ngrx/store';

import { Photo } from '../model';

export enum PhotoActionTypes {
  LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS'
}

export class LoadPhotosSuccessAction implements Action {
  readonly type = PhotoActionTypes.LOAD_PHOTOS_SUCCESS;

  constructor(public payload: Photo[]) {}
}

export type PhotoActions
  = LoadPhotosSuccessAction;
