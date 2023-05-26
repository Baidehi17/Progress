import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileSaverService } from 'src/app/service/save-files.service';

@Component({
  selector: 'app-browse-file',
  templateUrl: './browse-file.component.html',
  styleUrls: ['./browse-file.component.scss']
})
export class BrowseFileComponent {

  @ViewChild('popupTemplate') popupTemplate: any;

  @Input() maxFileSize!: any;
  @Input() maxFileLimt!: number

  popupTitle!: string;
  popupMessage!: string;

  public files: File[] = [];

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
    //check the number of file
    const diff = this.maxFileLimt - this.files.length;
    if (selectedFiles.length > diff) {
      this.popupTitle = "Sorry";
      this.popupMessage = "Sorry, you can only attach 5 documents";
      this.modalService.open(this.popupTemplate, { centered: true });
      return;
    }
    for (let i = 0; i < selectedFiles.length; i++) {
      if (selectedFiles[i].size <= this.maxFileSize * 1000000)                                        // one megabyte equals one million bytes, the code multiplies the value of "this.maxSize" by 1000000 to convert it from megabytes to bytes before comparing it to the file size.
      {
        this.files.push({
          name: selectedFiles[i].name,
          size: (selectedFiles[i].size / (1024 * 1024)).toFixed(2) + ' MB',
          type: (selectedFiles[i].type)
        } as unknown as File);

      } else {
        this.popupTitle = "Sorry";
        this.popupMessage = "Sorry, you cannot attach files greater than 5MB";
        this.modalService.open(this.popupTemplate, { centered: true });
        return;
      }
    }
    this.fileSave.addFiles(this.files);
  }
}