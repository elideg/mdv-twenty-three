import { UiLibModule } from './../../../../libs/ui-lib/src/lib/ui-lib.module';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { PersonsDetailsComponent } from './people/people-details/people-details.component';
import { PersonListComponent } from './people/people-list/people-list.component';
import { PeopleItemComponent } from './people/people-item/people-item.component';
import { PeopleComponent } from './people/people.component';
import { RoutingModule } from './routing.module';
import { CoreDataModule } from '@mdv-twenty-three/core-data';
import { MaterialModule } from '@mdv-twenty-three/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PeopleComponent, PeopleItemComponent, PersonListComponent, PersonsDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
