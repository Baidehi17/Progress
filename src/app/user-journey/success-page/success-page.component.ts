import { Component } from '@angular/core';
import { FileSaverService } from 'src/app/service/saveFiles.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent {
  
  public files: File[] = [];
  public fileList1!:string[];
  constructor(private fileSave: FileSaverService) { }

  ngOnInit(): void {
    this.fileSave.attachedFiles.subscribe(res => {
      this.files = res;
      this.fileList1 = Array.from(this.files).map(f => f.name);
    });
  }
}
