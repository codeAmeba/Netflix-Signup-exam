import { FormControl } from '@angular/forms';

export class Length {
  static emialLength(form: FormControl) {
    const length = form.get('email').value.length;
    return length >= 5 && length <= 50 ? null : { length };
  }

  static passwordLength(form: FormControl) {
    const length = form.get('password').value.length;
    return length >= 4 && length <= 60 ? null : { length };
  }
}
