// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {collection,getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn0TeQIyns944xiM-ZVRy9wifCdpSEklU",
  authDomain: "vue-borad-app.firebaseapp.com",
  projectId: "vue-borad-app",
  storageBucket: "vue-borad-app.appspot.com",
  messagingSenderId: "520159031178",
  appId: "1:520159031178:web:6ad9a7133418467723a273",
  measurementId: "G-17MB2KBNJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const dbChannels = collection(db, "channels");
// export const dbMessages = collection(db, "channels");
export const getCollectionMessages = (channelId) => {
  return collection(db, `channels/${channelId}/messages`)
}