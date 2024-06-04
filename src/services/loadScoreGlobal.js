import  {db} from "../firebase/client"
import {collection, getDocs,query} from "firebase/firestore";

export const loadScoreGlobal = async () => {
  const q = query(collection(db, 'ranking'));

  const querySnapshot = await getDocs(q);
  const scoreGlobal = querySnapshot.docs.map((doc) => doc.data());
  return scoreGlobal;
  // return [];
};