import firebase from "../firebase";

const db = firebase.ref("/artists");

class ArtistService {

  
  getAll() {
    return db;
  }

  create(artist) {
    return db.push(artist);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new ArtistService();
