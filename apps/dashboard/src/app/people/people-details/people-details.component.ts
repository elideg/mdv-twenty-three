import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Person } from '@mdv-twenty-three/core-data';

@Component({
  selector: 'mdv-twenty-three-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PersonsDetailsComponent implements OnInit {
  originalName;
  currentPerson: Person

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set person(value) {
    if (value) this.originalName = value.name;
      this.currentPerson = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(person: Person) {
    this.saved.emit(person);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
