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

console.log(user.getName());

import {get, post} from '@loopback/rest';

export class ManagerController {
  constructor() { }

  @get('/user')
  user(): string {

    return "Hello World!";
  }

  @post('/api/files')
  upload(): string {

    return "Hello World!";
  }

  @get('/api/samples')
  samples(): string {

    return "Hello World!";
  }
}
