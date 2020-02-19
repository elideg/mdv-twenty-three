import { createFeatureSelector, createSelector } from '@ngrx/store';
import { map } from 'rxjs/operators';

import {
  PERSONS_FEATURE_KEY,
  personsAdapter,
  PersonsPartialState,
  PersonsState
} from './people.reducer';

// Lookup the 'Persons' feature state managed by NgRx
export const selectPersonsState = createFeatureSelector<
  PersonsPartialState,
  PersonsState
>(PERSONS_FEATURE_KEY);

const { selectAll, selectEntities } = personsAdapter.getSelectors();

export const selectPersonsLoading = createSelector(
  selectPersonsState,
  (state: PersonsState) => state.isLoading
);

export const selectAllPersons = createSelector(
  selectPersonsState,
  (state: PersonsState) => selectAll(state)
);

export const selectPersonsEntities = createSelector(
  selectPersonsState,
  (state: PersonsState) => selectEntities(state)
);

export const selectPersonId = createSelector(
  selectPersonsState,
  (state: PersonsState) => state.selectedPersonId
);

export const selectPerson = createSelector(
  selectPersonsEntities,
  selectPersonId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
