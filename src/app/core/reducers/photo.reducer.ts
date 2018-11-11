import { PhotoActions, PhotoActionTypes } from '../actions';
import { Photo } from '../model';

export interface PhotoState {
  all: Photo[];
}

const initialState: PhotoState = {
  all: []
};

export function photoReducer(state: PhotoState = initialState, action: PhotoActions): PhotoState {
  switch (action.type) {

    case PhotoActionTypes.LOAD_PHOTOS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    default:
      return state;

  }
}
