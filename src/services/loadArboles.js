import  {db} from "../firebase/client"
import {collection, getDocs,query} from "firebase/firestore";
import { arboles } from "../../public/data/arbolesPlantados";

export const loadArboles = async () => {
  // const q = query(collection(db, 'arbolesPlantados'));

  // const querySnapshot = await getDocs(q);
  // const arbolesPlantados = querySnapshot.docs.map((doc) => doc.data());
  return arboles;
  // return [];
};