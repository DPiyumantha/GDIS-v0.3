import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/lecturers.json'

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {
  lecturerList: any[] = data.lecturers ;
  constructor() { }

  ngOnInit() {
    console.log(this.lecturerList);
  }

}
