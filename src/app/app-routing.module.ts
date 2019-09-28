import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigatingPageComponent } from './navigating-page/navigating-page.component';
import { LecturersComponent } from './lecturers/lecturers.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TourComponent } from './tour/tour.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"nav",
    component: NavigatingPageComponent,
    children:[
      {
        path: "lecturers",
        component: LecturersComponent
      },
      {
        path: "attendance",
        component: AttendanceComponent
      },
      {
        path: "timetable",
        component: TimetableComponent
      },
      {
        path: "tour",
        component: TourComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
