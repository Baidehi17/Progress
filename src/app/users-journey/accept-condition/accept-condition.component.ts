import { Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormInteractionService } from 'src/app/service/form-interaction.service';
import { FileSaverService } from 'src/app/service/save-files.service';

@Component({
  selector: 'app-accept-condition',
  templateUrl: './accept-condition.component.html',
  styleUrls: ['./accept-condition.component.scss']
})
export class AcceptConditionComponent {

 userdetail:any[]=[];
  form: FormGroup = new FormGroup({
    acceptTerms: new FormControl(false),
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder, private next: FileSaverService, private formInteractionService: FormInteractionService) { }

  ngOnInit(): void {
   // this.formInteractionService.userIformation.next(this.form.get('acceptTerms')?.value)
    this.form = this.formBuilder.group(
      {
        acceptTerms: [false, Validators.requiredTrue],
      }
    );
    this.formInteractionService.userIformation.subscribe(val=>{
       this.form.patchValue(val);
       if(this.form.value.acceptTerms ==true)
       {
       this.next.nextPageAble(true)
       }
    })
    this.formInteractionService.isInteracted.subscribe((val) => {
      if (val) {
        this.submitted = true;
        this.form.markAsDirty();
      }
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;

    if (this.form.get('acceptTerms')?.value != this.submitted) {
      this.next.nextPageAble(true)
     // this.formInteractionService.userIformation.next(true)
    }   
  }
}
