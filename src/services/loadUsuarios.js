import  {db} from "../firebase/client"
import {collection, getDocs,query} from "firebase/firestore";
import { usuarios } from "../../public/data/usuario";

export const loadUsuarios = async () => {
  // const q = query(collection(db, 'usuarios_public'));

  // const querySnapshot = await getDocs(q);
  // const usuarios = querySnapshot.docs.map((doc) => doc.data());
  return usuarios;
  // return [];
};

