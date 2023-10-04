import { Directive, Self, HostBinding, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCheckFormFieldValidity]'
})
export class CheckFormFieldValidity{
  constructor(
    @Self() private ngControl: NgControl
  ) { }

  @HostBinding('class.is-valid')
  public get isValid() {
    return this.valid;
  }

  @HostBinding('class.is-invalid')
  public get isInvalid() {
    return this.invalid;
  }

  public get valid() {
    return this.ngControl.valid && 
    (this.ngControl.dirty || this.ngControl.touched);
  }

  public get invalid() {
    return !this.ngControl.pending &&
      !this.ngControl.valid &&
      (this.ngControl.touched || this.ngControl.dirty);
  }
}