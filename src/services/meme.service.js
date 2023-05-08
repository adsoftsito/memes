import firebase from "../firebase";

const db = firebase.collection("/memes");

class MemeDataService {

  getAll() {
    return db;
  }

  create(meme) {
    return db.add(meme);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new MemeDataService();
