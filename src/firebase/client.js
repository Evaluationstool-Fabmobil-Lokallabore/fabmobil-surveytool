import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, push, set } from "firebase/database"; //import getterFunction of database service
import firebaseConfig from "./config.js";

class Client {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    // Require firebase services
    this.db = getDatabase(this.app);
    this.dbRef = ref(this.db);
  }

  // get() {
  //   get(child(this.dbRef, `foo`))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         console.log(snapshot.val());
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  postAnswersWorkshopEnd(data) {
    const answerListRef = ref(this.db, "answersWorkshopEnd");
    const newAnswerRef = push(answerListRef);
    set(newAnswerRef, data);
  }

  postAnswersWorkshopStart(data) {
    const answerListRef = ref(this.db, "answersWorkshopStart");
    const newAnswerRef = push(answerListRef);
    set(newAnswerRef, data);
  }
}

export default Client;
