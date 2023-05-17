import { Component, OnInit, ViewChild} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormInteractionService } from 'src/app/service/form-interaction.service';
import { FileSaverService } from 'src/app/service/save-files.service';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit{
 
  
   maxSize=5;
   maxFileLimit=5;
   public files :File[] = [];
  
   message!:string;
   constructor(private fileSave: FileSaverService,private formInteractionService:FormInteractionService) {}

  ngOnInit(): void {
      
    this.fileSave.attachedFiles.subscribe(res=>{
      this.files =res;
      this.nextpage();
    })
    this.formInteractionService.isInteracted.subscribe((val) => {
      if (val) {
        this.message="Atleast one file required"

      }
    })
  }
  nextpage()
  {
    if(this.files.length>0)
    {
     this.fileSave.nextPageAble(true);
    }
    else{
      this.fileSave.nextPageAble(false);
    }
  }
 }