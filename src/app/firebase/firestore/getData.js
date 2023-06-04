import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

const getData = async (collection, id) => {
  const docRef = doc(db, collection, id);
  let result = null,
    error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default getData;
