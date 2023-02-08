import { app } from "./init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
// import {
//   getUserFromUID,
//   createUserFromUID,
// } from "../src/controller/accountController";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signUpCashier = async (email, password, name, mobile,cashierId) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      cashierId
    );
    console.log(userCredentials);
    //createUserFromUID(name, mobile, userCredentials.user.uid);
  } catch (error) {
    console.log(error.message);
  }
};

export const signInCashier = async (email, password,cashierId) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password,
      cashierId 
    );
    console.log(userCredentials.user.uid);

   // getUserFromUID(userCredentials.user.uid);

    return userCredentials.user.uid;
  } catch (error) {
    console.log(error);
  }
};

export const signOutCashier = async (email, password) => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export const googleSignIn = async () => {
  try {
    const user = await signInWithPopup(auth, provider);
    console.log("loggedin")
  } catch (error) {
    console.log(error.message);
  }
};
