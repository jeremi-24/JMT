import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrZjawUW0qZsyFoOrBX3fqRivpQzHK7m0",
  authDomain: "database--site-sace.firebaseapp.com",
  projectId: "database--site-sace",
  storageBucket: "database--site-sace.appspot.com",
  messagingSenderId: "871879164627",
  appId: "1:871879164627:web:a4bf2ee9b826fdb45a0a26",
  measurementId: "G-SD3Y0NX9QG",
};

// Vérifie si une instance de Firebase existe déjà
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialisation de Firestore (Base de données)
export const db = getFirestore(app);

// Initialisation de Firebase Analytics (uniquement côté client)
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}
