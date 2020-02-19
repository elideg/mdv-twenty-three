import { createAction, props } from '@ngrx/store';

import { Person } from '@mdv-twenty-three/core-data';

export const personSelected = createAction(
  '[PERSON] Person Selected',
  props<{ selectedPersonId: string }>()
);

// Load Actions
export const loadPersons = createAction('[PERSON] Load Persons');

export const personsLoaded = createAction(
  '[PERSON] Persons Loaded',
  props<{ persons: Person[] }>()
);

// Create Actions
export const createPerson = createAction(
  '[PERSON] Create Person',
  props<{ person: Person }>()
);

export const personCreated = createAction(
  '[PERSON] Person Created',
  props<{ person: Person }>()
);

// Update Actions
export const updatePerson = createAction(
  '[PERSON] Update Person',
  props<{ person: Person }>()
);

export const personUpdated = createAction(
  '[PERSON] Person Updated',
  props<{ person: Person }>()
);

// Delete Actions
export const deletePerson = createAction(
  '[PERSON] Delete Person',
  props<{ person: Person }>()
);

export const personDeleted = createAction(
  '[PERSON] Person Deleted',
  props<{ person: Person }>()
);
