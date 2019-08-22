export class Person {
  constructor(public firstName: string, public lastName: string, public age: number, public birthday: Date){

  }
  toString(): string{
    return this.firstName + ', ' + this.lastName + ', ' + this.age + ', ' + this.birthday;
  }
}
