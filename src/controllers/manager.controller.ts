class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}

class User extends Person {
  constructor(name: string) {
    super(name);
  }
}

let user: User = new User('Ivan');

import {get} from '@loopback/rest';

export class ManagerController {
  constructor() { }

  @get('/user')
  user(): string {

    return "Hello World!";
  }
}
