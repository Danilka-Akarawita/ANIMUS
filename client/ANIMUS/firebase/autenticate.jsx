import { app } from "./init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider
} from "firebase/auth";

const auth = getAuth(app);

export const signUpUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};



export const signInUser = async (email, password) => {
  try{
  const user=await signInWithEmailAndPassword(auth, email, password)
    console.log(user)
    }catch (error) {
      console.log(error.message);
    }
  };


  export const signOutUser = async (email, password) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  }

export const googleSignIn = async () => {
  try{
     const user= await signInWithPopup(auth, provider)
   
     }catch(error){
         console.log(error.message)
         
     };
  }