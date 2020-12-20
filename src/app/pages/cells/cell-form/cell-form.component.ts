import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-form',
  templateUrl: './cell-form.component.html',
  styleUrls: [ './cell-form.component.css' ]
})
export class CellFormComponent implements OnInit {

  pageTitle: string;

  constructor() {
    this.pageTitle = 'Nova célula';
  }

  ngOnInit(): void {
  }

}
