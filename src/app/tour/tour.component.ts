import { VideoService } from './../shared/video.service';
import { Component, OnInit } from '@angular/core';
import { Video } from '../shared/video';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  list: Video[];
  k: string;
  

  constructor( private service: VideoService) { }

  ngOnInit() {
    this.service.getVideos().subscribe(
      res=>{
        this.list = res.map(
          item=>{
            return{
            id: item.payload.doc.id,
            ...item.payload.doc.data()  as Video } 
        }
        )
      }
    );
  }

}
