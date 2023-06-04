import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import firebase_app from "@/app/firebase/config";

const db = getFirestore(firebase_app);

export async function GET(req, res) {
  const snapshot = await getDocs(collection(db, "Users"));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.status(200).json(data);
}

export const POST = async (req, res) => {
  if (req.method === "POST") {
    const { data } = req.body;

    try {
      const docRef = addDoc(
        collection(db, "Users"),
        res.status(200).json({ id: docRef.id, ...data }),
      );
    } catch (error) {
      res.status(500).json({ error: "failed to add document" });
    }
  } else {
    res.status(405).json({ error: "method not allowed" });
  }
};
