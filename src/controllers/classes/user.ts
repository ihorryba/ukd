export class User {
  firstName: string;
  lastName: string;

  constructor(name: string, surname: string) {
    this.firstName = name;
    this.lastName = surname;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
