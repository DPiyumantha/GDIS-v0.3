import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {
  notice: string = 'Progress Meeting Of Third Year Physics Group Project will be held on 25th December, 2019 at 8.30am';
  constructor() { }

  ngOnInit() {
  }

}
