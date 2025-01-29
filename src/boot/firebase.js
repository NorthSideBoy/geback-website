import * as firebase from "firebase/app";
import { getStorage, deleteObject, ref as Ref, uploadBytes, getDownloadURL } from "firebase/storage"
import "firebase/auth"
import { getFirestore, collection, getDocs, addDoc, deleteDoc, updateDoc, getDoc, doc, setDoc, serverTimestamp, query as Query, where, orderBy, limit, startAt, startAfter } from "firebase/firestore";
import * as auth from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBPbqg7EZWISRVNLR6nkMyAItHT1TUfkX0",
  authDomain: "sipcas-website.firebaseapp.com",
  projectId: "sipcas-website",
  storageBucket: "sipcas-website.appspot.com",
  messagingSenderId: "882710288966",
  appId: "1:882710288966:web:48d5725e0df5be5787c847",
  measurementId: "G-Y0JYNG2BVH"
};


const app = firebase.initializeApp(firebaseConfig);

const storage = getStorage(app);
const Auth = auth.getAuth(app)

const register = auth.createUserWithEmailAndPassword
const login = auth.signInWithEmailAndPassword

const actions = {
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc
}

const Authenticator = {
  register,
  login,
}

// const timestamp = app.firestore.FieldValue.serverTimestamp;
const db = getFirestore(app);

const collections = {
  courses: collection(db, "courses"),
  users: collection(db, "users"),
  forms: collection(db, "forms"),
  members: collection(db, "members"),
  customers: collection(db, "customers"),
  sectors: collection(db, "sectors")
}

export { db, Auth, Authenticator, actions, doc, collections, storage, Ref, uploadBytes, getDownloadURL, setDoc, serverTimestamp, Query, where, orderBy, limit, startAt, startAfter, deleteObject };
