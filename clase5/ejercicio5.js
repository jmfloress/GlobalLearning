//Ejercicio 5: Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que lo identifique
//findUniq([1,1,1,1,2,1,1,1]) ==> return (2)

function findUnique(array) {
    return array.find(item => array.indexOf(item) == array.lastIndexOf(item));
}
let array = [1,1,1,1,2,1,1,1];
const uniqueValue = findUnique(array);
console.log('El unico valor que se repite es ', uniqueValue);


//find devuelve el primer elemento que cumple con la condicion