import { Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ValidationService } from 'src/app/service/validation.service';
import {FileSaverService} from '../../service/saveFiles.service'
import { userDetails } from 'src/app/Model/userDetails';
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {

  userDetail! : userDetails[];

    form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    preferredName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userService: FileSaverService) {}

  ngOnInit(): void {   
    this.form = this.formBuilder.group(
      {
        
        firstName: ['', Validators.required],
        preferredName: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
            //Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
          ],
        ],
        confirmPassword: ['', Validators.required],
        
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        Validators: ValidationService.match('password','confirmPassword')
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true; 
    if(this.form.invalid)
    {
      return
    }
    else{
      this.userService.addNewUser(this.form.value).subscribe(
        res=>{this.userDetail = res
        console.log(this.userDetail)
      })
    }
  }
}
