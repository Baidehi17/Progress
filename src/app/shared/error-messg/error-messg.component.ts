import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-messg',
  templateUrl: './error-messg.component.html',
  styleUrls: ['./error-messg.component.scss']
})
export class ErrorMessgComponent implements OnInit {
  
  @Input() title!: string;
  @Input() message!: string;

  @ViewChild('popup') popup: any;

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    console.log("error messg component");
  }

  open() {
    this.modalService.open(this.popup);
  }

  close() {
    this.modalService.dismissAll();
  }
}
