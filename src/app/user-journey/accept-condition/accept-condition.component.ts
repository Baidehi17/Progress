import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-accept-condition',
  templateUrl: './accept-condition.component.html',
  styleUrls: ['./accept-condition.component.scss']
})
export class AcceptConditionComponent {

  @Output() nextPage:EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup = new FormGroup({
    acceptTerms: new FormControl(false),
  });
  
  submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
       
        acceptTerms: [false, Validators.requiredTrue],
      }
    );
  }
  get formControl() {
    return this.form.controls;
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  
  onSubmit(){
   this.nextPage.emit(1);   
  }
}
