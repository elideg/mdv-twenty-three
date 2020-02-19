import { PeopleItemComponent } from './people/people-item/people-item.component';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from '@mdv-twenty-three/ui-lib';
import { WildComponent } from '@mdv-twenty-three/ui-lib';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'people', children: [
    { path: '', component: PeopleComponent },
    { path: ':id', component: PeopleItemComponent }
  ] },
  { path: '404', component: WildComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
