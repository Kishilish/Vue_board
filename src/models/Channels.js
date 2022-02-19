import {dbChannels} from "../db/index";
import { query, orderBy, getDocs, } from "firebase/firestore";

class Channel {
  constructor({id, name}) {
    this.id = id,
    this.name = name
  }
  static async fetch() {
    const snapShot = await getDocs(query( dbChannels , orderBy("name")));
    if (snapShot.empty){
      console.log("empty")
      return [];

    }
    return snapShot.docs.map((doc) => {
      return this.create(doc.id, doc.data())
    });
  }
  static create(id, data){
    return new Channel({
      id,
      name:data.name
    })
  }
}
export default Channel;