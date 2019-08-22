import { Injectable } from '@angular/core';
import {Person} from "./person";

@Injectable()
export class PersonService {
  constructor() {
  }
  addPerson(firstName: string, person: Person): void {
    if (localStorage.getItem(firstName) == null) {
      localStorage.setItem(firstName, person.toString());
    }
  }
  searchPerson(firstName: string): string {
    let person = localStorage.getItem(firstName);
    return person;
  }
  editPerson(firstName: string, person: Person): void {
    localStorage.setItem(firstName, person.toString());
  }
  deletePerson(firstName: string): void {
    if (localStorage.getItem(firstName) != null){
      localStorage.removeItem(firstName);
    }
  }
  listPerson(): string[] {
    let people = [];
    for (let i=0; i< localStorage.length; i++){
      let person = localStorage.key(i);
      let result = localStorage.getItem(person);
      people.push(result);
    }
    return people;
  }
}
