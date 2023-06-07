import { Component, TemplateRef } from '@angular/core';
import { ToastServiceService } from 'src/app/service/toast-service.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },

  // styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  constructor(public toastService: ToastServiceService) { }

  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }

}
