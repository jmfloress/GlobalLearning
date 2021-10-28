//Ejercicio 2: Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3

function highdelete(array) {
    if(array.length > 5){
        i=0;
        while (i<3) {
            array.pop();
            i++;
        }
        console.log('El array contiene mas de 5 elementos, se eliminarán los 3 ultimos');
    }else{
        console.log('El array no contiene mas de 5 elementos');
    }
    console.log(array);
}
array = [1,2,3,4,5];
//array = [1,2,3,4,5,6,7,8];
highdelete(array);