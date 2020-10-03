import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-list',
  templateUrl: './cell-list.component.html',
  styleUrls: [ './cell-list.component.css' ]
})
export class CellListComponent implements OnInit {


  pageTitle: string;

  constructor() {
    this.pageTitle = 'Células'
  }

  ngOnInit(): void {
  }

}
