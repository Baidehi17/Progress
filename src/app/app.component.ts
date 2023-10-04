import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // TODO: submit for processing
    } else {
        (<any>Object)
        .values(this.registerForm.controls)
        .forEach((c: { markAsTouched: () => any; }) => c.markAsTouched());
    }
  }

  onReset() {
    this.registerForm.reset();
  }

}
