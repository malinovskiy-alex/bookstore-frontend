export class User {
  constructor(public id: number = 0,
              public email: string = '',
              public username: string = '',
              public password: string = '',
              public confirmPassword: string = '',
              public birthday: string = '',
              public gender: string = '') {
  }
}
