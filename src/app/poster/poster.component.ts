import { PosterService } from './../shared/poster.service';
import { Poster } from './../shared/poster';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  list: Poster[];
  k: string;
  

  constructor( private service: PosterService) { }

  ngOnInit() {
    this.service.getPosters().subscribe(
      res=>{
        this.list = res.map(
          item=>{
            return{
            id: item.payload.doc.id,
            ...item.payload.doc.data()  as Poster } 
        }
        )
      }
    );
    // console.log(this.list);
  }

}
