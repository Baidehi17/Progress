import { Component, OnInit } from '@angular/core';
import { CurrentPage } from 'src/app/Model/CurrentPage';
import { Page } from 'src/app/service/const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 
  currentPage!: CurrentPage;
  Page = Page;
  
  constructor() {}

  ngOnInit(): void {
    this.currentPage=Page[0]
  }
  previousPage() {
    const prevPageNo = this.currentPage.pageNo - 1;
    this.currentPage = this.Page.find(page => page.pageNo === prevPageNo);
  }
  
  nextPage() {
    const nextPageNo = this.currentPage.pageNo + 1;
    this.currentPage = this.Page.find(page => page.pageNo === nextPageNo);
  }

}