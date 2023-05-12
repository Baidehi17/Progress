import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropDirective } from '../Directive/drag-drop.directive';
import { ErrorMessgComponent } from './error-messg/error-messg.component';
import { BrowseFileComponent } from './browse-file/browse-file.component';
import { DragDropFileComponent } from './drag-drop-file/drag-drop-file.component';



@NgModule({
  declarations: [
    DragDropDirective,
    ErrorMessgComponent,
    BrowseFileComponent,
    DragDropFileComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    BrowseFileComponent,
    DragDropFileComponent
  ]
})
export class SharedModule { }
