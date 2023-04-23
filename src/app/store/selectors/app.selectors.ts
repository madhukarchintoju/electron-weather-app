import { createSelector } from '@ngrx/store';


const getUserDetails = (state: any) => state.AppState;

export const getUserData = createSelector(
    getUserDetails,
    (state) => state.user
  );
  