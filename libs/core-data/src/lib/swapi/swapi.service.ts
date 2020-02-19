import { Person } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as uuid from 'uuid/v1';

const BASE_URL = 'https://swapi.co/api';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService {
model = 'people/?limit=80'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  create(person: Person) {
    return of(({ id: uuid(), ...person }))
  }
}
