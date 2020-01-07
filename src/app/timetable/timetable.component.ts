import { Component, OnInit } from '@angular/core';
import { TimetablesService } from '../shared/timetables.service';
import { Timetable } from '../shared/timetable';
import { TimetableServiceService } from '../shared/timetable-service.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  list: Timetable[];
  k: string;
  

  constructor( private service: TimetableServiceService) { }

  ngOnInit() {
    this.service.getTimetables().subscribe(
      res=>{
        this.list = res.map(
          item=>{
            return{
            id: item.payload.doc.id,
            ...item.payload.doc.data()  as Timetable } 
        }
        )
      }
    );
    // console.log(this.list);
  }

}
