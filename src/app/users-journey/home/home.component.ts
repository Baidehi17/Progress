import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CurrentPage } from 'src/app/Model/currentPage';
import { Page } from 'src/app/service/const';
import { FormInteractionService } from 'src/app/service/form-interaction.service';
import { FileSaverService } from 'src/app/service/save-files.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('submit') popupTemplate: any;

  currentPage!: CurrentPage;
  Page = Page;

  constructor(private next: FileSaverService, private formInteractionService: FormInteractionService) { }

  ngOnInit(): void {
    this.currentPage = Page[0]
  }
  previousPage() {
    const prevPageNo = this.currentPage.pageNo - 1;
    this.currentPage = this.Page.find(page => page.pageNo === prevPageNo);
    this.next.nextPageAble(true)
  }
  nextpage = true;
  nextPage() {

    this.formInteractionService.isInteracted.next(true);
    this.next.nextPageValidation.subscribe(res => {
      this.nextpage = res;
    })
    if (this.nextpage == true) {
      const nextPageNo = this.currentPage.pageNo + 1;
      this.currentPage = this.Page.find(page => page.pageNo === nextPageNo);
      this.next.nextPageAble(false)
      this.formInteractionService.isInteracted.next(false);
    }
  }
}