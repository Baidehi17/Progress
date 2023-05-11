import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileSaverService } from 'src/app/service/saveFiles.service';

@Component({
  selector: 'app-browse-file',
  templateUrl: './browse-file.component.html',
  styleUrls: ['./browse-file.component.scss']
})
export class BrowseFileComponent {
  @ViewChild('deletePopup') deletePopup!: ElementRef;
  @ViewChild('errorPopup') errorPopup!: ElementRef;
  maxNo=5;  
  maxSize=5;
  public files: File[] = [];
  public indexToDelete: number | null = null;
  public errorType = '';

  constructor(private modalService: NgbModal, private fileSave: FileSaverService) { }

  ngOnInit(): void {
    this.fileSave.attachedFiles.subscribe(res => {
      this.files = res;
    });
  }

  processFileSelection(selectedFiles: FileList | null): void {
    if (!selectedFiles) {
      return;
    }
    //check the number of file = 5
    const diff = this.maxNo - this.files.length;
    if (selectedFiles.length > diff) {
      this.errorType = "numError";
      this.modalService.open(this.errorPopup, { centered: true });
      return;
    }
    for (let i = 0; i < selectedFiles.length; i++) {
      if (selectedFiles[i].size <= this.maxSize * 1000000)                                        // one megabyte equals one million bytes, the code multiplies the value of "this.maxSize" by 1000000 to convert it from megabytes to bytes before comparing it to the file size.
      {
        this.files.push({
          name: selectedFiles[i].name,
          size: (selectedFiles[i].size / (1024 * 1024)).toFixed(2) + ' MB',
          type: (selectedFiles[i].type)
        } as unknown as File);

      } else {
        this.errorType = "sizeError"
        this.modalService.open(this.errorPopup, { centered: true });
        return;
      }
    }
    this.fileSave.addFiles(this.files);
    console.log(this.files)
  }
 
 
delete:boolean=false;
  triggerPopup(i: number): void {
    this.delete=true;    
    this.indexToDelete = i;
    this.errorType="deleteFile";
    this.modalService.open(this.errorPopup, { centered: true });
  }

  deleteAttachment(): void {
    if (typeof this.indexToDelete === 'number') {
      this.files.splice(this.indexToDelete, 1);
      this.indexToDelete = null;
    }
  }
}
//using Array.from(event) convert array like obj to array and then get the name.
// setFileList(event:FileList)
  // {
  //   //create new array and map the name 
  //   this.fileList1 = Array.from(event).map(f => f.name);
  //   this.fileSave.addFiles(event);
  // }