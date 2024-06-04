// // import { top100 } from "../../../public/data/ranking2024Abril18";
// import { mes_1 } from "../../../public/data/Mensual_1_2023";
// import { loadScoreGlobal } from "../../services/loadScoreGlobal";
import { loadScoreMes } from "../../services/loadScoreMes";
import { scoresGlobal } from "../../../public/data/scoresGlobal";

import { top100 } from "../../../public/data/ranking2024Abril18";


// const top100 = await loadScoreGlobal();
// const scoreMes = await loadScoreMes();


export function calculartop(id) {
  const listaTop = top100[0].top100;
  // console.log(listaTop)
  const reversedList = listaTop.slice().reverse();
  const userFound = listaTop.find((user) => user.id === id);
  for (let index = 0; index < reversedList.length; index++) {
    if (reversedList[index].id === id) {
      return index + 1;
      break;
    }
  }
  return 0;
}

export function obtenerPuntosTotal(id) {
  const listaTop = top100[0].top100;
  const userFound = listaTop.find((user) => user.id === id);
  for (let index = 0; index < listaTop.length; index++) {
    if (listaTop[index].id === id) {
      const puntos =listaTop[index].puntos
      return puntos;
      break;
    }
  }
  return 0;
}

export function determinarMedalla(puntos) {
  if (puntos < 2401) {
    return 'Aprendíz';
  } else if (puntos < 5001) {
    return 'Protector';
  } else if (puntos < 7401) {
    return 'Leyenda';
  } else {
    return 'Ancestro';
  }
}

// export function calculartop_mes(id) {
//   const listaOrdenada = ordenar(mes_1);
//   for (let index = 0; index < listaOrdenada.length; index++) {
//     if (listaOrdenada[index].id === id) {
//       return index;
//       break;
//     }
//   }
//   return 0;
// }

// export function ordenar(array) {
//   array.sort(function (itema, itemb) {
//     if (itema.puntos > itemb.puntos) {
//       return 1;
//     }
//     if (itema.puntos < itemb.puntos) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   });
// }

// // const fs = require('fs');
// // const path = require('path');
// import { defineConfig } from "astro/config";
// import fs from "fs";
// import path from "path";

// import { existsSync } from "fs";
// import { resolve } from "path";
// // const fs = require('fs');
// // const path = require('path');

// // const fs = require('fs');
// // const path = require('path');  Mensual_1_2023

// export function cargarDatosMensualesPorAño(año) {
//   const directorio = "../../../public/data";
//   let datosMensuales = {};
//   const resultado = [];

//   // Itera sobre cada mes del año especificado
//   for (let mes = 1; mes <= 12; mes++) {
//     // const rutaArchivo = `${directorio}/Mensual_${mes}_${año}.js`;
//     // //import { mes_1 } from "../../../public/data/Mensual_1_2023";
//     // console.log(rutaArchivo);
//     const rutaArchivo = resolve(`${directorio}/Mensual_${mes}_${año}.js`);
//     const existe = existsSync(rutaArchivo);
//     resultado.push({ mes, rutaArchivo, existe });
//   }

//   return {
//     body: JSON.stringify(resultado),
//   };
// }

// // Uso de la función
// // console.log(cargarDatosMensualesPorAño(2023)); // Para obtener datos de todos los meses del año 2023
// // Para obtener datos de todos los meses del año 2022
