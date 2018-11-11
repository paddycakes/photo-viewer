import { ActionReducerMap } from '@ngrx/store';

import { PhotoState, photoReducer } from './photo.reducer';

export interface AppState {
  readonly photos: PhotoState;
}

export const reducers: ActionReducerMap<AppState> = {
  photos: photoReducer
};
