import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseFirestore } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimetableServiceService {

  constructor(private firestore: AngularFirestore) { }

  getTimetables(){
    return this.firestore.collection('timetabledata').snapshotChanges();
  }

}
