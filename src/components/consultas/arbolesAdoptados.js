import { loadUsuarios } from "../../services/loadUsuarios";
import { loadArboles } from "../../services/loadArboles";

// import { arboles } from "../../../public/data/arbolesPlantados";
// import { usuarios } from "../../../public/data/usuario";
// import { obtenerFecha } from "./CantidadDatos";

const usuarios = await loadUsuarios();
const arboles = await loadArboles();

export function arbolesAdoptados(id) {
  let arbolesAdoptadosinf = [];
  for (let index = 0; index < arboles.length; index++) {
    if (arboles[index].usuariosQueAdoptaron.includes(id)) {
      arbolesAdoptadosinf.push(arboles[index]);
    }
  }
  return arbolesAdoptadosinf;
}


//se filtra los arboles plantados por id
export function arbolesPlantados(arbolesAdoptados,id) {
  let arbolesPlantadosinf = [];
  for (let index = 0; index < arbolesAdoptados.length; index++) {
    if (arbolesAdoptados[index].plantadoPor === id ) {  
      arbolesPlantadosinf.push(arboles[index]);
    }
  }
  return arbolesPlantadosinf;
}


export function obtenerarbol(id) {
  const arbolesAdoptados = arboles.filter((arbol) => {
    return arbol.id.includes(id);
  });

  return arbolesAdoptados;
}

export function obtnerdatosid(id) {
  console.log(id)
  const datosid = usuarios.filter((usuario) => {
    return usuario.id.includes(id);
  });

  return datosid;
}
