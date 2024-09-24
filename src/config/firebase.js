import { initializeApp } from 'firebase/app';
import { getFirestore, getStorage } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB2BLlhltlhCemvVk8jRMSW76D8pKfRmTM",
    authDomain: "web-fruit-shopping-ecommerce.firebaseapp.com",
    projectId: "web-fruit-shopping-ecommerce",
    storageBucket: "web-fruit-shopping-ecommerce.appspot.com",
    messagingSenderId: "1076556324122",
    appId: "1:1076556324122:web:adca3abc724fed1c29a0a3",
    measurementId: "G-HX25FFHXJ0"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);