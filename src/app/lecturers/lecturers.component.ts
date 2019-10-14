import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/lecturers.json'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {
lecList: any[];
  constructor(db:AngularFireDatabase) {
     db.list('/lecturers').valueChanges().subscribe(lecList=>{
       this.lecList=lecList;
       console.log(this.lecList[1].name);
     });
   }

  ngOnInit() {
    
  }

}
export class Lecturer{
  name: string;
  position:string;
  qualifications: string;
}
