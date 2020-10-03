import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: [ './personal-list.component.css' ]
})
export class PersonalListComponent implements OnInit {

  pageTitle: string;

  constructor() {
    this.pageTitle = 'Pessoal'
  }

  ngOnInit(): void {
  }

}
