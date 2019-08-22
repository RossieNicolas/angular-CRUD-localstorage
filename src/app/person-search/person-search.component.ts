import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PersonService} from "../service/person.service";

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  search: FormGroup;
  person: string;
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.search = new FormGroup({firstName: new FormControl('')})
  }
  onSubmit(): void {
    this.person = this.personService.searchPerson(this.search.value.firstName);
  }

}
