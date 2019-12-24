import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/lecturers.json'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { LecturerServiceService } from '../shared/lecturer-service.service.js';
import { Lecturer } from '../shared/lecturer.model.js';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {
  lecList: Lecturer[];
  constructor(private service: LecturerServiceService) {
     
   }

  ngOnInit() {
    this.service.getLecturers().subscribe(actionArray=>{
      this.lecList = actionArray.map(item=>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() } as Lecturer
      })
      console.log(this.lecList);
    });
    console.log(this.lecList);
       
  }

}

