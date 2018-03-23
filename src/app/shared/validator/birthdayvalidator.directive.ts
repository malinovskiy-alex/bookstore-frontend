import {Directive} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[birthdayValidator][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: BirthdayValidator, multi: true}
  ]
})
export class BirthdayValidator implements Validator {
  constructor() {
  }

  validate(c: AbstractControl): { [key: string]: any } {
    if (!c.value) {
      return null;
    }
    let date = new Date(c.value.year, c.value.month - 1, c.value.day);
    if (date > Date.now()) {
      return {
        birthdayValidator: true
      };
    }
    return null;
  }
}
