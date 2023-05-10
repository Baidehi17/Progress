import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  private enabled!: boolean;
  private draginProgress!: boolean;

  @Input() set appDragDrop(value: any) {
    this.enabled = value === '' ? true : !!value;
  }


  @HostBinding('class.dragging') get dragInProgress() {
    return this.draginProgress;
  }

  @Output() dropped: EventEmitter<any>;

  constructor() {
    this.dropped = new EventEmitter();
  }

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])

  private handleDragOver(event: DragEvent): void {
    if (!this.enabled) {
      return;
    }
    event.dataTransfer!.dropEffect = 'move';
    this.stopAndPreventDefault(event);
    this.draginProgress = true;
  }

  @HostListener('dragleave', ['$event'])
  @HostListener('dragend', ['$event'])
  
  private handleDragEnd(event: DragEvent): void {
    if (!this.enabled) {
      return;
    }
    this.stopAndPreventDefault(event);
    event.dataTransfer!.effectAllowed = 'copy';
    this.draginProgress = false;
  }

  @HostListener('drop', ['$event'])
  private handleDrop(event: UIEvent): void {
    this.stopAndPreventDefault(event);
    this.draginProgress = false;
    this.dropped.emit(event);
  }

  stopAndPreventDefault(e: UIEvent): void {
    e.stopPropagation();
    e.preventDefault();
  }
}
