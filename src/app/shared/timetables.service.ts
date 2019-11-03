import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TimetablesService {

  constructor(private firestore: AngularFirestore) { }

  getTimeTable(){
    return this.firestore.collection('timetables').snapshotChanges();
  }
}
