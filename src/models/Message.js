import {getCollectionMessages} from "../db/index";
import { serverTimestamp, addDoc,query, orderBy, getDocs,getDoc } from "firebase/firestore";

class Message {
  constructor({id, body, date,}){
    this.id = id;
    this.body = body;
    this.date = date;
  }
  static async save({body,channelId}) {
    if(!body || !body.trim()){
      throw new Error("入力必須です。");
    }
    
    const postData = {
      body,
      date:serverTimestamp(),
    }

    const docRef = await addDoc(getCollectionMessages(channelId), postData);
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
  static async fetchMessages(channelId){
    const snapShot = await getDocs(query( getCollectionMessages(channelId) , orderBy("date")));
    if (snapShot.empty){
      return [];
    }
    return snapShot.docs.map((doc) => {
      return this.create(doc.id, doc.data())
    });
  }

}
export default Message;