import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PersonService} from "../service/person.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {

  delete: FormGroup;
  constructor(private personService: PersonService, private router:Router) { }

  ngOnInit() {
    this.delete = new FormGroup({firstName: new FormControl('')});
  }

  onSubmit(): void{
    this.personService.deletePerson(this.delete.value.firstName);
    this.router.navigate(['/list']);
  }

}
