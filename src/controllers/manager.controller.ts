import {get} from '@loopback/rest';

export class ManagerController {
  constructor() {}

  @get('/user')
  user(): any {
    return 'Hello World!';
  }
}
