//Ejercicio 6: Dado un arreglo de números enteros, encuentre la menor suma posible entre ellos
//minSum([7,4,2,3]) ==> return (5)

function sum(array) {
    array.sort();
    return array[0] + array[1]
}