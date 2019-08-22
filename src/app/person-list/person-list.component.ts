import { Component, OnInit } from '@angular/core';
import {PersonService} from "../service/person.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  people: string[];
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.people = this.personService.listPerson();
  }

}
