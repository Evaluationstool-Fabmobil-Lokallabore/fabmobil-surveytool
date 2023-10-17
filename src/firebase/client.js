import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, push, set, child } from "firebase/database"; //import getterFunction of database service
import firebaseConfig from "./config.js";

class Client {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    // Require firebase services
    this.db = getDatabase(this.app);
    this.dbRef = ref(this.db);
  }

  createUserID(nickname, geburtstag) {
    if (!nickname || !geburtstag) {
      throw Error("Can't create nickname");
    }
    return `${nickname}${geburtstag.day}${geburtstag.month}${geburtstag.year}`;
  }

  postAnswersWorkshopEnd(data) {
    const answerListRef = ref(this.db, "answersWorkshopEnd");
    const newAnswerRef = push(answerListRef);
    return set(newAnswerRef, data);
  }

  postAnswersWorkshopStart(data) {
    const answerListRef = ref(this.db, "answersWorkshopStart");
    const newAnswerRef = push(answerListRef);
    return set(newAnswerRef, data);
  }

  postUser(userID) {
    const userListRef = ref(this.db, "users");
    const newUserRef = push(userListRef);
    return set(newUserRef, userID).then(() => userID);
  }

  userDoesExist(userId) {
    return get(child(this.dbRef, `users`)).then((snapshot) => {
      if (!userId) throw Error("No userID given");
      if (snapshot.exists()) {
        try {
          return Object.values(snapshot.val()).includes(userId);
        } catch {
          alert("Error");
        }
      } else {
        throw Error;
      }
    });
  }
}

export default Client;
