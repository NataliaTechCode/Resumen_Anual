import  {db} from "../firebase/client"
import {collection, getDocs,query} from "firebase/firestore";
import { scoresMes } from "../../public/data/scoresMes";

export const loadScoreMes = async (mes,year) => {
  // const q = query(collection(db, "9_2022"));

  // const querySnapshot = await getDocs(q);
  // const scoreMes = querySnapshot.docs.map((doc) => doc.data());
  return scoresMes;
// return [];
};