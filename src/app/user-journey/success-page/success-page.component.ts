import { Component } from '@angular/core';
import { FileSaverService } from 'src/app/service/saveFiles.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent {
  
  public files: File[] = [];
  constructor(private fileSave: FileSaverService) { }

  ngOnInit(): void {
    this.fileSave.attachedFiles.subscribe(res => {
      this.files = res;
    });
  }
}
