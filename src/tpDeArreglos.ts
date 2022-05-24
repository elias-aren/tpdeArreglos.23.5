let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let sumaDeArreglos3: number[] = new Array(6);
let indice: number;
for (indice = 0; indice < 6; indice++) {
  arreglo1[indice] = Number(
    prompt("ingrese el numero de la posicion $(indice): ")
  );
}
for (indice = 0; indice < 6; indice++) {
  arreglo2[indice] = Number(
    prompt("ingrese el numero de la posicion $(indice): ")
  );
}
for (indice = 0; indice < 6; indice++) {
  sumaDeArreglos3[indice] = 0;
}
for (indice = 0; indice < 6; indice++) {
  sumaDeArreglos3[indice] = arreglo1[indice] + arreglo2[indice];
}
for (indice = 0; indice < 6; indice++) {
  console.log("la suma de arreglos es: sumaDeArreglos3[indice])");
}