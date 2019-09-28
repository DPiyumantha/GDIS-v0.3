import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeTopComponent } from './home-top/home-top.component';
import { HomeBottomComponent } from './home-bottom/home-bottom.component';
import { HomeTopRightComponent } from './home-top-right/home-top-right.component';
import { HomeTopLeftComponent } from './home-top-left/home-top-left.component';
import { NavigatingPageComponent } from './navigating-page/navigating-page.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TourComponent } from './tour/tour.component';
import { TimetableComponent } from './timetable/timetable.component';
import { LecturersComponent } from './lecturers/lecturers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeTopComponent,
    HomeBottomComponent,
    HomeTopRightComponent,
    HomeTopLeftComponent,
    NavigatingPageComponent,
    AttendanceComponent,
    TourComponent,
    TimetableComponent,
    LecturersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
