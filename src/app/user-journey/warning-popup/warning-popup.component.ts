import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DragDropDirective } from '../../Directive/drag-drop.directive';

@Component({
  selector: 'app-warning-popup',
  templateUrl: './warning-popup.component.html',
  styleUrls: ['./warning-popup.component.scss']
})
export class WarningPopupComponent {

  //@Input() multiple!: boolean;
  @Input() fileType!: string;
  @Input() dragDropEnabled = true;
  @Output() filesChanged: EventEmitter<FileList>; //child to parent,  send to file component

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
