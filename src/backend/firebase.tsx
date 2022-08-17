import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeSnhxVNjaXLLUGBCYqFIFFyBL-CWyxJ0",
  authDomain: "wonjae-blog.firebaseapp.com",
  projectId: "wonjae-blog",
  storageBucket: "wonjae-blog.appspot.com",
  messagingSenderId: "1081343993932",
  appId: "1:1081343993932:web:f5d45cf37928a822da6ce9",
  measurementId: "G-1FKVYYXCQF"
};

export const app = initializeApp(firebaseConfig);
