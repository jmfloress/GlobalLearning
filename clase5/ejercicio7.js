/*Ejercicio 7: Dado un arreglo de números enteros, encuentre el mayor producto posible dado a partir de números adyacentes
adjacentElementsProduct([9,5,10,2,24,-1]) ==> return (50)
 5 * 10 = 50*/
function adjacentElementsProduct(array){
    let maxResult = array[0] * array[1];
    for (let i = 2; i < array.length; i++) {
        let partialResult = array[i-1] * array[i];
        if(maxResult < partialResult){
            maxResult = partialResult;
        }
    }
    console.log(minResult);
    return minResult;
}
adjacentElementsProduct([9,5,10,2,24,-1]);