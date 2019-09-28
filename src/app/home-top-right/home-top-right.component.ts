import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-top-right',
  templateUrl: './home-top-right.component.html',
  styleUrls: ['./home-top-right.component.css']
})
export class HomeTopRightComponent implements OnInit {
  temperature:number = 26.5;
  wind: number= 20.4;
  sky:string = 'Cloudy';
  constructor() { }

  ngOnInit() {
  }

}
