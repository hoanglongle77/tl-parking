// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";
import { firebaseConfig } from "./Firebase";

//1. Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

//2. Declare all collections;
const introduction_Collection = collection(database, "gioi-thieu");
const products_Collection = collection(database, "san-pham");
const projects_Collection = collection(database, "tin-tuc");

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

export { getProducts, getProjects, getItemById };
