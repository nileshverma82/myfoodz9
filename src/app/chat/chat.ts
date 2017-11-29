import { Component, OnInit } from '@angular/core';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private   messagesCollection: AngularFirestoreCollection<any> = this.afs.collection('chat/food1/buyer1+Seller1');
  private messages: Observable<any[]>;
  uid = 'uid'
  constructor(public afs: AngularFirestore) {     this.getChatData();
}

  ngOnInit() {

    this.getChatData();
    }

   getChatData(){
    this.messagesCollection = this.afs.collection<any>(`chat/food1/buyer1+Seller1`);
     this.messages = this.messagesCollection.valueChanges();
   }

   newMessage(messages) {
	  this.messagesCollection.doc('msg').set({
     msg: messages
    })
   }
   /*
    newMessage(messages) {
	  this.messagesCollection.add({
     text: messages
    }).then((docref)=>{
      this.messagesCollection.doc(docref.id).update({
        id:docref.id
      })
    }).catch((err)=>{
      console.log(err);
    })
  }*/
}
