import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { languages } from 'src/app/service/const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  langs = languages;
  selectedLang: string = this.langs[0].value;
  constructor(private translocoService: TranslocoService) {
  }

  updateLocale(language: string) {
    this.translocoService.setActiveLang(language);
  }
}
