import {Directive, forwardRef, Attribute} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[validateEqual][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: EqualValidator, multi: true}
  ]
})
export class EqualValidator implements Validator {
  constructor(@Attribute('validateEqual') public validateEqual: string) {
  }

  validate(c: AbstractControl): { [key: string]: any } {
    let currentValue = c.value;

    let valueCompareWith = c.root.get(this.validateEqual);

    if (valueCompareWith && currentValue !== valueCompareWith.value) {
      return {
        validateEqual: true
      };
    }
    return null;
  }
}
