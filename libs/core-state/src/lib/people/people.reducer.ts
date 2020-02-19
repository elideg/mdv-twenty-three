import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as personsActions from './people.actions';
import { Person } from '@mdv-twenty-three/core-data';

export const PERSONS_FEATURE_KEY = 'persons';

export interface PersonsState extends EntityState<Person> {
  selectedPersonId?: string | number;
  isLoading: boolean;
}

export interface PersonsPartialState {
  readonly [PERSONS_FEATURE_KEY]: PersonsState;
}

export const personsAdapter: EntityAdapter<Person> = createEntityAdapter<Person>();

export const initialState: PersonsState = personsAdapter.getInitialState({
  // set initial required properties
  selectedPersonId: null,
  isLoading: false
});

const personsReducer = createReducer(
  initialState,
  on(personsActions.personSelected, (state, { selectedPersonId }) =>
    Object.assign({}, state, { selectedPersonId })
  ),
  on(personsActions.personsLoaded, (state, { persons }) =>
    personsAdapter.addAll(persons, { ...state, isLoading: false })
  ),
  on(personsActions.personCreated, (state, { person }) =>
    personsAdapter.addOne(person, { ...state, isLoading: false })
  ),
  on(personsActions.personUpdated, (state, { person }) =>
    personsAdapter.upsertOne(person, { ...state, isLoading: false })
  ),
  on(personsActions.personDeleted, (state, { person }) =>
    personsAdapter.removeOne(person.id, { ...state, isLoading: false })
  ),
  on(
    personsActions.loadPersons,
    personsActions.createPerson,
    personsActions.updatePerson,
    personsActions.deletePerson,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: PersonsState | undefined, action: Action) {
  return personsReducer(state, action);
}
