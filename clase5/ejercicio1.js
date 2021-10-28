//Ejercicio 1: Haga una función que siempre elimine al primer elemento del arreglo
const array = ['manzana' , 'pera' , 'naranja','banana','manzana'];
console.log(array);

function deleteFisrst(array){
    array.shift();
}
deleteFisrst(array);
console.log(array);