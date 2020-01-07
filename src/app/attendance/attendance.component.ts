import { Component, OnInit } from '@angular/core';

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
   width = 600;
   height = 150;

   //Daily attendance chart
   title2 = '';
   type2 = 'ColumnChart';
   data2 = [
     ['Monday', 250,300,100],['Tuesday',300,280,100],['Wednesday',200,180,50],['Thursday',210,140,60],['Friday',100,150,40]
  ];
   columnNames2 = ['1st year', '2nd year', '3rd year'];
   options2 = {
   };
   width2 = 100;
   height2 = 100;

  constructor() { }

  ngOnInit() {
  }

}


