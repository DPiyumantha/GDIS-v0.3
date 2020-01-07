import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../shared/attendance.service';

//import { StatsServiceService } from './stats-service.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
   //Created an error message property to display error message
   errorMessage: string;
  
   //Weekly Atendance columnchart 
   title = '';
   type = 'ColumnChart';
   data = [
     ['Monday', 40],['Tuesday', 60],['Wednesday',20],['Thursday',60],['Friday',50]
  ];
   columnNames = ['Day', 'Attendance'];
   options = {
   };
   width = 550;
   height = 200;

   //Daily attendance chart
   title2 = '';
   type2 = 'ColumnChart';
   data2 = [
     ['Monday', 250,300,100],['Tuesday',300,280,200],['Wednesday',200,180,100],['Thursday',210,140,120],['Friday',100,150,60]
  ];
   columnNames2 = ['Day','1st year', '2nd year', '3rd year'];
   options2 = {hAxis: {
    title: 'Day'
 },
 vAxis:{
    title: 'Attendance'
 },
   };
   width2 = 700;
   height2 = 200;

  constructor(private service :AttendanceService) { }

  ngOnInit() {
  }

}


