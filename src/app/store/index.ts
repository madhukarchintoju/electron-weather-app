
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppReducer } from './reducers/app.reducers';

export const reducers: ActionReducerMap<any> = {
  AppState: AppReducer,
};

export const metaReducers: MetaReducer<any>[] = [];