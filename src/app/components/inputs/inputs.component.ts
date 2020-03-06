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
    email: this.email,
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([this.fb.control('')])
  })

  constructor(private fb: FormBuilder) {}

  onSubmit() {}

  inputs = `
  ~~~html
  <div class="ea-form-field">
    <input type="..." placeholder="..." value="..." name="..." disabled>
  </div>
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
