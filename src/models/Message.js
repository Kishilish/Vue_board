import {dbMessages} from "../db/index";
import { serverTimestamp, addDoc,query, orderBy, getDocs,getDoc } from "firebase/firestore";

class Message {
  constructor({id, body, date,}){
    this.id = id;
    this.body = body;
    this.date = date;
  }
  static async save({body}) {
    if(!body || !body.trim()){
      throw new Error("入力必須です。");
    }
    
    const postData = {
      body,
      date:serverTimestamp(),
      // .firestore.FieldValue.serverTimestamp(),
      // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.FieldValue#servertimestamp
      // https://firebase.google.com/docs/firestore/manage-data/add-data#server_timestamp
    }

    const docRef = await addDoc(dbMessages, postData);
    const snapShot = await getDoc(docRef);
    const data =  snapShot.data();
    const model = this.create(docRef.id, data);

    return model;
  }
  static create(id, data){
    return new Message({
      id,
      body:data.body,
      date:data.date.toDate().toLocaleString()
    });
  }
  static async fetchMessages(){
    const snapShot = await getDocs(query( dbMessages , orderBy("date")));
    // console.log(snapShot);
    if (snapShot.empty){
      return [];
    }
    return snapShot.docs.map((doc) => {
      console.log(doc.id, doc.data())
      return this.create(doc.id, doc.data())
    });
  }

}
export default Message;