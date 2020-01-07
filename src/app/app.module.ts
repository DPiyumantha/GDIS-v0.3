import { WeatherStationService } from './shared/weather-station.service.service';
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
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { ThirdSlideComponent } from './third-slide/third-slide.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { LecturerServiceService } from './shared/lecturer-service.service';
import { AngularFirestoreModule } from '@angular/fire/firestore'

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
    LecturersComponent,
    NoticeBoardComponent,
    ThirdSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  
  ],
  providers: [ LecturerServiceService, WeatherStationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
