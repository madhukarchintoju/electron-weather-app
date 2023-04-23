
import { createReducer, on, Action } from '@ngrx/store';
import { initialAppState } from '../app.interface';
import { login } from '../actions/app.actions';

export const userFeatureKey = 'AppState';

export const reducer = createReducer(
  initialAppState,
  on(login, (state, action) => ({
    ...state,
    user: action.user
  })),
);

export function AppReducer(state: any, action: Action) {
  return reducer(state, action);
}