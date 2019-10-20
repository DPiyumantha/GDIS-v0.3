import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private firestore: AngularFirestore) { }

  getNotices(){
   return this.firestore.collection('notices').snapshotChanges();
  }
}
