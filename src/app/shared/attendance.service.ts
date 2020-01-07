import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  formData: AttendanceService;
  constructor(private firestore:AngularFirestore) { }

  getAttendance(){
    return this.firestore.collection('attendance').snapshotChanges();
  }
}
