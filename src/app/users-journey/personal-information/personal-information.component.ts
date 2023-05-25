import { Component,ViewChild} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ValidationService } from 'src/app/service/validation.service';
import {FileSaverService} from '../../service/save-files.service';
import { userDetails } from 'src/app/model/userDetails';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormInteractionService } from 'src/app/service/form-interaction.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {

  popupTitle!:string;
  popupMessage!:string;

  @ViewChild('popup') popup:any;
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
  constructor(private formBuilder: FormBuilder, private userService: FileSaverService, private ModelService:NgbModal, private formInteractionService:FormInteractionService) {}

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
    this.formInteractionService.isInteracted.subscribe((val) => {
      if (val) {
        if(this.form.invalid)
        {
        this.submitted = true; 
        }
        else{
          if(this.form.value.id)
          {
            this.userService.updateUserDetails(this.form.value)
          }
          else{
            this.onSubmit();
          }         
        }
      }      
    })
    this.formInteractionService.userIformation.subscribe(val=>{
      this.form.patchValue(val);

    })  
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
        this.popupTitle="thank you!!";
        this.popupMessage="Your Information safe with us"
        this.ModelService.open(this.popup,{centered:true})
      });

        this.userService.nextPageAble(true);
        this.formInteractionService.userIformation.next(this.form.value)       
    }
  } 
}
