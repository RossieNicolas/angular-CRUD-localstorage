import { Component } from '@angular/core';
import {PersonService} from "../service/person.service";
import {Person} from "../service/person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent {
  private person = new Person('','',0,new Date());
  constructor(private personService: PersonService, private router: Router) { }

  onSubmit(): void {
    let firstName = this.person.firstName;
    this.personService.addPerson(firstName, this.person);
    this.router.navigate(['/list']);
  }


}
