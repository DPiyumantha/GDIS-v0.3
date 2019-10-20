import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../shared/notice.service';
import { Notice } from '../shared/notice.model';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {
  list: Notice[];
  constructor(private service: NoticeService) { }

  ngOnInit() {
    this.service.getNotices().subscribe(res=>{
      this.list = res.map(item=>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
      } as Notice
    })
    });
  }

}
