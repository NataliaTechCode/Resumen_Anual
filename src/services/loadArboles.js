import  {db} from "../firebase/client"
import {collection, getDocs,query} from "firebase/firestore";

export const loadArboles = async () => {
  // const q = query(collection(db, 'arbolesPlantados'));

  // const querySnapshot = await getDocs(q);
  // const arbolesPlantados = querySnapshot.docs.map((doc) => doc.data());
  // return arbolesPlantados;
  return [];
};