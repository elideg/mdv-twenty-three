import { ActionReducerMap } from '@ngrx/store';

import * as fromPeople from './people/people.reducer';

export interface AppState {
  persons: fromPeople.PersonsState;
}

export const reducers: ActionReducerMap<AppState> = {
  persons: fromPeople.reducer,
};

//---------------------------------------
// Common Selectors
//---------------------------------------
