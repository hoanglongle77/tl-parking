// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPWx7Ly2AEh7uM95AmzOha_AVjQ0UbvHY",
  authDomain: "tl-parking.firebaseapp.com",
  projectId: "tl-parking",
  storageBucket: "tl-parking.appspot.com",
  messagingSenderId: "801069814019",
  appId: "1:801069814019:web:9a5aa799a81106f191d936",
  measurementId: "G-TNW6W7H7Q8",
};

//1. Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);

//2. Declare all collections;
const introduction_Collection = collection(database, "gioi-thieu");
const products_Collection = collection(database, "san-pham");
const projects_Collection = collection(database, "tin-tuc");

const loginAdmin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true; // Return true if login is successful
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Throw an error if login fails
  }
};

const logoutAdmin = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

const getItemById = async (collectionName, documentID) => {
  try {
    const docRef = doc(database, collectionName, documentID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log(`Document with ID ${documentID} not found.`);
      return null;
    }
  } catch (error) {
    console.error(`Error getting document: ${error}`);
    return null;
  }
};

// const getLastestIntroduction = async () => {
//   try {
//     const querySnapshot = await getDocs(introduction_Collection);

//     const latestDocument = querySnapshot.docs.reduce((latest, current) => {
//       if (!latest || current.data().timeStamp > latest.data().timeStamp) {
//         return current;
//       } else {
//         return latest;
//       }
//     }, null);

//     if (latestDocument) {
//       return latestDocument.data();
//     } else {
//       return null;
//     }
//   } catch (error) {
//     throw error;
//   }
// };

const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(products_Collection);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const getProjects = async () => {
  try {
    const querySnapshot = await getDocs(projects_Collection);
    const news = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return news;
  } catch (error) {
    console.error("Error fetching news", error);
    throw error;
  }
};

export { loginAdmin, logoutAdmin, getProducts, getProjects, getItemById };
