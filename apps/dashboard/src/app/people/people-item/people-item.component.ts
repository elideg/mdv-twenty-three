import { PersonsFacade } from './../../../../../../libs/core-state/src/lib/people/people.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '@mdv-twenty-three/core-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-twenty-three-peoples-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.scss']
})
export class PeopleItemComponent implements OnInit {
  persons$: Observable<Person>;

  constructor(
    private route: ActivatedRoute,
    private personsFacde: PersonsFacade
  ) { }

  ngOnInit() {
    this.personsFacde.loadPersons();
    this.route.params.subscribe((param) => this.personsFacde.selectPerson(param['id']));
    this.persons$ = this.personsFacde.selectedPerson$
  }

}
