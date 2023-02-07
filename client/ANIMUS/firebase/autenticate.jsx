import { app } from "./init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getUserFromUID,
  createUserFromUID,
} from "../src/controller/accountController";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signUpUser = async (email, password, name, mobile) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    createUserFromUID(name, mobile, userCredentials.user.uid);
  } catch (error) {
    console.log(error.message);
  }
};

export const signInUser = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials.user.uid);

    getUserFromUID(userCredentials.user.uid);

    return userCredentials.user.uid;
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = async (email, password) => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export const googleSignIn = async () => {
  try {
    const user = await signInWithPopup(auth, provider);
  } catch (error) {
    console.log(error.message);
  }
};
