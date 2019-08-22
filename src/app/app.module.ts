import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonAddComponent } from './person-add/person-add.component';
import {PersonService} from "./service/person.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { PersonListComponent } from './person-list/person-list.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'add', component:PersonAddComponent
  },
  {
    path: 'list', component:PersonListComponent
  },
  {
    path: 'search', component:PersonSearchComponent
  },
  {
    path: 'edit', component:PersonEditComponent
  },
  {
    path: 'delete', component:PersonDeleteComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PersonAddComponent,
    PersonListComponent,
    PersonSearchComponent,
    PersonEditComponent,
    PersonDeleteComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
