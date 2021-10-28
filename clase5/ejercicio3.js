//Ejercicio 3: Teniendo un arreglo numérico, tenemos que sumarle un número (por parámetro) a cada elemento de nuestro arreglo

function add(array, number) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + number;
    }
}
array = [1,2,3,4,5,6];
add(array, 10)
console.log(array);