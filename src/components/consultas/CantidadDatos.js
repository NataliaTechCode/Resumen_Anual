export function obtenerFecha(timestamp) {
  const milliseconds = timestamp.nanoseconds / 1000000;
  const date = new Date(timestamp.seconds * 1000 + milliseconds);
  // const ano = date.getFullYear();
  return date;
}

export function arbolesPlantadoscant(arbolesAdoptados, year) {
  let fechamin;
  let primeraIteracion = true;
  let cantArboles = 0;
  for (let index = 0; index < arbolesAdoptados.length; index++) {
    let fechaObj;
    const monitoreo = arbolesAdoptados[index].monitoreos;
    for (let key in monitoreo) {
      fechaObj =obtenerFecha(monitoreo[key].timestamp);
      if (primeraIteracion || fechaObj < fechamin) {
        fechamin = fechaObj;
        primeraIteracion = false;
      }
    }
    if (fechamin.getFullYear() === year ) {
      cantArboles++;
    }
  }
  return cantArboles;
}

export function obtenerRiegos(arbolesAdoptados, anoActual, id) {
  let cantRiegos = 0;
  arbolesAdoptados.forEach((arbol) => {
    const riegos = arbol.riegos;
    for (let key in riegos) {
      const timestamp = riegos[key].timestamp;
      const riegoRealizado = riegos[key].riegoRealizadoPor;
      const fecha = obtenerFecha(timestamp);
      // console.log(fecha)
      if (fecha.getFullYear() == anoActual && riegoRealizado == id) {
        cantRiegos++;
      }
    }
  });

  return cantRiegos;
}

export function obtenerMonitoreos(arbolesAdoptados, anoActual, id) {
  let cantMonitoreos = 0;
  arbolesAdoptados.forEach((arbol) => {
    const monitoreos = arbol.monitoreos;
    for (let key in monitoreos) {
      const monitoreoRealizado = monitoreos[key].monitoreoRealizadoPor;
      const timestamp = monitoreos[key].timestamp;
      const fecha = obtenerFecha(timestamp);
      // console.log(fecha.getFullYear())
      // console.log(monitoreoRealizado)
      if (fecha.getFullYear() === anoActual && monitoreoRealizado === id) {
        cantMonitoreos++;
      }
    }
  });

  return cantMonitoreos;
}

export function maxRiegos(arbolesAdoptados, anoActual) {
  let arbolriegos = {};
  let cantmaxima = 0;
  arbolesAdoptados.forEach((arbol) => {
    let cant = 0;
    const riegos = arbol.riegos;
    for (let key in riegos) {
      const timestamp = riegos[key].timestamp;

      const fecha = obtenerFecha(timestamp);
      if (fecha.getFullYear() === anoActual) {
        cant++;
      }
    }
    if (cant > cantmaxima) {
      cantmaxima = cant;
      arbolriegos = arbol;
    }
  });
  // return cantmaxima !== 0 ? arbol : [];
  return arbolriegos;
}

export function maxMonitoreos(arbolesAdoptados, anoActual) {
  let arbolmonitoreos = {};
  let cantmaxima = 0;
  arbolesAdoptados.forEach((arbol) => {
    let cant = 0;
    const monitoreos = arbol.monitoreos;
    for (let key in monitoreos) {
      const timestamp = monitoreos[key].timestamp;
      const fecha = obtenerFecha(timestamp);
      if (fecha.getFullYear() === anoActual) {
        cant++;
      }
    }
    if (cant > cantmaxima) {
      cantmaxima = cant;
      arbolmonitoreos = arbol;
    }
  });
  // return cantmaxima !== 0 ? arbol : [];
  return arbolmonitoreos;
}

export function maxcrecimiento(arbolesAdoptados, anoActual) {
  let arbolCrecimiento = [];
  let alturamaxima = 0;
  let arbolMaximo = "";
  let arbolfotografia = "";

  arbolesAdoptados.forEach((arbol) => {
    let alturamin = 0;
    const monitoreosfiltrados = filtrarMonitoreos(arbol.monitoreos, anoActual);
    const monitoreosArray = Object.values(monitoreosfiltrados);
    if (monitoreosArray.length > 1) {
      const primeraAltura = monitoreosArray[0].altura;
      const ultimaAltura = monitoreosArray[monitoreosArray.length - 1].altura;
      alturamin = ultimaAltura - primeraAltura;
      arbolfotografia = monitoreosArray[0].fotografia;
    } else if (monitoreosArray.length == 1) {
      alturamin = monitoreosArray[0].altura;
      arbolfotografia = monitoreosArray[0].fotografia;
    }

    if (alturamin > alturamaxima) {
      alturamaxima = alturamin;
      arbolMaximo = arbol.nombreComun;
    }
  });

  arbolCrecimiento.push({ alturamaxima, arbolMaximo, arbolfotografia });
  return arbolCrecimiento;
}

export function filtrarMonitoreos(monitoreos, anoActual) {
  const monitoreosactual = {};
  for (const key in monitoreos) {
    const monitoreo = monitoreos[key];
    const timestamp = monitoreos[key].timestamp;

    const fecha = obtenerFecha(timestamp);
    if (fecha.getFullYear() === anoActual) {
      monitoreosactual[key] = monitoreo;
    }
  }

  return monitoreosactual;
}

export function obtenerUsuarios(obtenerarbol) {
  const usuariosadoptaron = [];
  // console.log(obtenerarbol.length);
  if (obtenerarbol.length > 0) {
    obtenerarbol.forEach((arbol) => {
      arbol.usuariosQueAdoptaron.forEach((usuario) => {
        usuariosadoptaron.push(usuario);
      });
    });
    const usuariosUnicos = Array.from(new Set(usuariosadoptaron));
    return usuariosUnicos;
  } else {
    return usuariosadoptaron;
  }
}

export function obtenerDetallesDeUsuarios(idsDeUsuarios, usuarios, id) {
  const usuarioss = [
    {
      nombre: "Ninguno",
      imageProfile: "default",
    },
  ];

  const resultado = idsDeUsuarios
    .map((id) => usuarios.find((usuario) => usuario.id === id))
    .filter((usuario) => usuario && usuario.id !== id);

  // console.log(resultado)
  return resultado.length > 0 ? resultado : usuarioss;
}

export function obtenerdatosArbol(obtenerarbol) {
  const fechaantigua = "2000-01-1";
  let fechaObj = new Date(fechaantigua);
  let fotografia = "";
  let datosArbol = [];
  let nombrearbol = "";
  for (let key in obtenerarbol.monitoreos) {
    const fecha = obtenerFecha(obtenerarbol.monitoreos[key].timestamp);

    if (fecha > fechaObj) {
      fechaObj = fecha;
      fotografia = obtenerarbol.monitoreos[key].fotografia;
      nombrearbol = obtenerarbol.nombreComun;
    }
  }
  datosArbol.push({ fotografia, nombrearbol });
  return datosArbol;
}
