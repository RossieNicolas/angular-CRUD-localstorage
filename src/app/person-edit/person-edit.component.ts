import { Component } from '@angular/core';
import {Person} from "../service/person";
import {PersonService} from "../service/person.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent {

  private person = new Person('','',0,new Date());
  constructor(private personService: PersonService, private router: Router) { }
  onSubmit() {
    let firstName = this.person.firstName;
    this.personService.editPerson(firstName, this.person);
    this.router.navigate(['/list']);
  }
}
