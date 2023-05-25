import { Component, OnInit,  } from '@angular/core';
import {  FormArray,  FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInteractionService } from 'src/app/service/form-interaction.service';
import { FileSaverService } from 'src/app/service/save-files.service';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {


  maxSize = 5;
  maxFileLimit = 5;
  public files: File[] = [];

  message!: string;
  constructor(private fileSave: FileSaverService, private formInteractionService: FormInteractionService) { }

  ngOnInit(): void {

    this.fileSave.attachedFiles.subscribe(res => {
      this.files = res;
    })
  }

  individualForm: FormGroup = new FormGroup({
    policyNumber: new FormControl('', Validators.required),
    procedureCost: new FormControl('', Validators.required),
    count: new FormControl('', Validators.required)
  })
}