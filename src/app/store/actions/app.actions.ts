import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[loginModule] log user Action',
  props<{ user: any }>()
);
