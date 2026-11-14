let tripulacion = ['Capitán', 'Copiloto', 'Aeromoza', 'Navegante', 'Karen', 'Inspector'];
console.log("Elemento 0: " + tripulacion[0]);
console.log("Elemento 1: " + tripulacion[1]);
console.log("Elemento 2: " + tripulacion[2]);
console.log("Elemento 3: " + tripulacion[3]);
console.log("Elemento 4: " + tripulacion[4]);
console.log("Tamaño del arreglo: " + tripulacion.length);

console.log("tripulación: ", tripulacion);
console.log("Incluir elementos a un arreglo en Push");
tripulacion.push("Carrera");
console.log("tripulación: ", tripulacion);
tripulacion.unshift("Lisseth");
console.log("tripulación: ", tripulacion);
tripulacion.push("Lizeth");
console.log("tripulación: ", tripulacion);

console.log("Modificar elementos de un arreglo");
tripulacion[0] = "Liseth";
console.log("tripulación: ", tripulacion);

console.log("Eliminar un elemento del arreglo (pop):");
tripulacion.pop();
console.log("tripulación: ", tripulacion);
tripulacion.shift();
console.log("tripulación: ", tripulacion);
tripulacion.splice(1, 1);
console.log("tripulación: ", tripulacion);