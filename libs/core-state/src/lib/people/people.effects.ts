import { NotifyService } from './../../../../core-data/src/lib/notify.service';
import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as personsActions from './people.actions';
import { Person, PeoplesService } from '@mdv-twenty-three/core-data';
import { PersonsPartialState } from './people.reducer';

import { of } from 'rxjs';

import { tap } from 'rxjs/operators';

@Injectable()
export class PersonsEffects {
  loadPersons$ = createEffect(() =>
    this.dataPersistence.fetch(personsActions.loadPersons, {
      run: (
        action: ReturnType<typeof personsActions.loadPersons>,
        state: PersonsPartialState
      ) => {
        return this.personsService.all().pipe(
          tap((res) => console.log(res)),
          map((people: any) => people.results.map(
            (res, index) => ({ id: ++index, ...res})
            )),
          map((persons: Person[]) => personsActions.personsLoaded({ persons }))
        )
      },
      onError: (action: ReturnType<typeof personsActions.loadPersons>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addPerson$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(personsActions.createPerson, {
      run: (
        action: ReturnType<typeof personsActions.createPerson>,
        state: PersonsPartialState
      ) => {
        return this.personsService.create(action.person).pipe(
          map((person: Person) => personsActions.personCreated({ person })),
          tap(() => this.notify.notify('Successfully added a Person'))
        );
      },
      onError: (action: ReturnType<typeof personsActions.createPerson>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updatePerson$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(personsActions.updatePerson, {
      run: (
        action: ReturnType<typeof personsActions.updatePerson>,
        state: PersonsPartialState
      ) => {
        return of(action.person).pipe(
          map((person: Person) => personsActions.personUpdated({ person })),
          tap(() => this.notify.notify('Successfully updated a Person'))
        );
      },
      onError: (action: ReturnType<typeof personsActions.updatePerson>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deletePerson$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(personsActions.deletePerson, {
      run: (
        action: ReturnType<typeof personsActions.deletePerson>,
        state: PersonsPartialState
      ) => {
        return of(action.person).pipe(
          map((person: Person) => personsActions.personDeleted({ person })),
          tap(() => this.notify.notify('Successfully deleted a Person'))
        );
      },
      onError: (action: ReturnType<typeof personsActions.deletePerson>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PersonsPartialState>,
    private personsService: PeoplesService,
    private notify: NotifyService
  ) {}
}
