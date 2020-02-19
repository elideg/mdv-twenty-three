import { PersonsFacade } from '@mdv-twenty-three/core-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Person } from '@mdv-twenty-three/core-data';
import { map } from 'rxjs/operators';
import { FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdv-twenty-three-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  form: FormGroup;
  selectedPeople$: Observable<Person> = this.personsFacde.selectedPerson$;
  peoples$: Observable<Person[]> = this.personsFacde.allPersons$;

  constructor(
      private fb: FormBuilder,
      private personsFacde: PersonsFacade
  ) {}

  ngOnInit() {
      this.initForm();
      this.personsFacde.loadPersons();
      this.selectPerson({ id: null } as Person);
  }

  selectPerson(people: Person) {
      this.form.patchValue(people);
      this.personsFacde.selectPerson(people.id);
  }

  cancel() {
      this.selectPerson({ id: null } as Person);
      this.form.reset();
  }

  savePerson(formDirective: FormGroupDirective) {
      if (this.form.invalid) return;
      if (this.form.value.id) {
        this.personsFacde.updatePerson(this.form.value);
        this.selectPerson({ id: null } as Person);
      } else {
        this.personsFacde.createPerson(this.form.value);
        this.selectPerson({ id: null } as Person);
    }
  }

  deletePerson(people: Person) {
    this.personsFacde.deletePerson(people);
    this.form.reset();
  }


  initForm() {
      this.form = this.fb.group({
          id: [''],
          name: ['', Validators.compose([Validators.required])],
          mass: ['', Validators.compose([Validators.required])],
          hair_color: [''],
          gender: ['']
      })
  }

}
