import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-messg',
  templateUrl: './error-messg.component.html',
  styleUrls: ['./error-messg.component.scss']
})
export class ErrorMessgComponent {
  
  @Input() title!: string;
  @Input() message!: string;

  @ViewChild('popup') popup: any;

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.popup);
  }

  close() {
    this.modalService.dismissAll();
  }
}
