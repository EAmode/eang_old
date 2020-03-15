import { Component } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'eangio-inputs',
  templateUrl: './inputs.component.html',
  styles: [
    `
      h2 {
        margin: 0.5em 0;
      }

      .dis-flx {
        display: flex;
      }

      .dis-blc {
        display: block;
      }
    `
  ]
})
export class InputsComponent {
  name = new FormControl('', [Validators.required, Validators.minLength(4)])
  email = new FormControl('', [Validators.email])
  form = this.fb.group({
    name: this.name,
    email: this.email
  })

  constructor(private fb: FormBuilder) {}

  onSubmit() {}

  inputs = `
  ~~~html
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
  <div class="ea-form-field">
    <label for="name">* Name</label>
    <input type="text" name="Name" formControlName="name" id="name" required>
    <div class="ea-validation-errors" *ngIf="name.invalid && (name.dirty || name.touched)">
      <div *ngIf="name.errors.required">Name is required</div>
      <div *ngIf="name.errors.minlength">Name must be at least 4 characters long.</div>
    </div>
  </div>
  <div class="ea-form-field">
    <label for="email">Email</label>
    <input type="text" name="Email" formControlName="email" id="email">
    <div class="ea-validation-errors" *ngIf="email.invalid && (email.dirty || email.touched)">
      <div *ngIf="email.errors.email">Please enter a valid email.</div>
    </div>
  </div>
  <button class="ea-button" type="submit" [disabled]="!form.valid">Add User</button>
</form>

<p>Values:</p>
{{ form.valueChanges | async | json }}
  ~~~
  `

  switchCheckbox = `
  ~~~html
  <div class="checkbox-switch">
    <input type="checkbox" value="Light">
  </div>
  ~~~
  `

  radioCheckbox = `
  ~~~html
  <div class="ea-form-field">
    ...
    <div class="ea-radio-item">
        <input type="radio" id=".." name="..." value="..." checked>
        <label for="..."> "..." </label>
    </div>
    ...
  </div>

  ...

  <div class="ea-form-field">
    ...
    <input type="checkbox" name="..." checked>
    <label for="...">"..."</label>
    ...
  </div>
  ~~~
  `
}
