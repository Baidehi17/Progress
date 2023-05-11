import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-drop-file',
  templateUrl: './drag-drop-file.component.html',
  styleUrls: ['./drag-drop-file.component.scss']
})
export class DragDropFileComponent {

  @Input() fileType!: string;
  @Input() dragDropEnabled = true;
  @Output() filesChanged: EventEmitter<FileList>;   //child to parent,  send to file component

  @ViewChild('fileInput') inputRef!: ElementRef<HTMLInputElement>;


  constructor() {
    this.filesChanged = new EventEmitter();
  }

  addFiles(files: FileList | null): void {
    if (files !== null) 
    {
      this.filesChanged.emit(files);
    }
  }

  handleFileDrop(event: DragEvent) {
    if (event?.dataTransfer?.files?.length) {
      const files = event.dataTransfer.files;
      this.inputRef.nativeElement.files = files;
      this.addFiles(files);
    }
  }
}
