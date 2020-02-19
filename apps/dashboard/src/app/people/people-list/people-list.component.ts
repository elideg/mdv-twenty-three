import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Person } from '@mdv-twenty-three/core-data';

@Component({
  selector: 'mdv-twenty-three-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})

export class PersonListComponent implements OnInit {
  @Input() peoples: Person[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {}

  select(people: Person) {
    this.selected.emit(people);
  }

  delete(people: Person) {
    this.deleted.emit(people);
  }
}
