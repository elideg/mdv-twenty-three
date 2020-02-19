import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromPersons from './people.reducer';
import * as personsActions from './people.actions';
import {
  selectAllPersons,
  selectPerson,
  selectPersonsLoading
} from './people.selector';
import { Person } from '@mdv-twenty-three/core-data';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonsFacade {
  allPersons$ = this.store.pipe(select(selectAllPersons));
  selectedPerson$ = this.store.pipe(select(selectPerson));
  personLoading$ = this.store.pipe(select(selectPersonsLoading));

  constructor(private store: Store<fromPersons.PersonsPartialState>) {}

  selectPerson(selectedPersonId: string) {
    this.dispatch(personsActions.personSelected({ selectedPersonId }));
  }

  loadPersons() {
    this.dispatch(personsActions.loadPersons())
  }

  createPerson(person: Person) {
    this.dispatch(personsActions.createPerson({ person }));
  }

  updatePerson(person: Person) {
    this.dispatch(personsActions.updatePerson({ person }));
  }

  deletePerson(person: Person) {
    this.dispatch(personsActions.deletePerson({ person }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
