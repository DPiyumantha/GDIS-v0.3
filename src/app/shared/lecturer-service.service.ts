import { Injectable } from '@angular/core';
import { FirebaseFirestore } from 'angularfire2';
import { Lecturer } from './lecturer.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LecturerServiceService {

  

  constructor(private firestore: AngularFirestore) { 
    
  }

  getLecturers(){
    return this.firestore.collection('lecturers').snapshotChanges();
  }
}
