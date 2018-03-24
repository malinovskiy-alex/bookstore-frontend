import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive} from '@angular/core';

@Directive({
  selector: '[complexity][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: ComplexityValidator, multi: true}]
})
export class ComplexityValidator implements Validator {

  validate(control: AbstractControl): { [key: string]: any } {
    let password = control.value;
    if (password == null) {
      return null;
    }
    if (!password.match(/[a-z]+/)) {
      return {complexity: true};
    }
    if (!password.match(/[A-Z]+/)) {
      return {complexity: true};
    }
    if (!password.match(/[0-9]+/)) {
      return {complexity: true};
    }
    return null;
  }
}
