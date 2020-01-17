import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/shared/attendance.service';
import { Attendance } from 'src/app/shared/attendance.model';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {

  list:Attendance[];  
  constructor(private service:AttendanceService) { }

  ngOnInit() {
    this.service.getAttendance().subscribe(actionArray =>{
      this.list = actionArray.map(item => {
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        }as Attendance
      })
    });
  }

}
