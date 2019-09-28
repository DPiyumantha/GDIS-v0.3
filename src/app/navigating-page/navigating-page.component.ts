import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigating-page',
  templateUrl: './navigating-page.component.html',
  styleUrls: ['./navigating-page.component.css']
})
export class NavigatingPageComponent implements OnInit {
  comIndex:number;
  constructor() { }

  ngOnInit() {
  }

  changeComponent(com:number){
    this.comIndex = com;
  }

}
