//Ejercicio 8: Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
//Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero
//El lobo solo puede comer a la oveja que tiene a su derecha

//[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (ESTE ES EL FRENTE DE LA FILA)
//   7      6      5      4      3            2      1

//warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) ===> "Hey! Oveja numero 1! El lobo esta cerca!"
//warnTheSheep(["sheep", "sheep", "sheep", "wolf"]) ===> "No sigas comiendo ovejas!"

function warnTheSheep(array) {
    let positionWolf = array.indexOf('wolf');
    let sheepRight = array.slice(positionWolf).length - 1;
    let txt = sheepRight == 0 ? 'No sigas comiendo ovejas' : 'Hey! oveja numero ' + sheepRight + '! El lobo esta cerca';
    console.log(array);
    console.log(txt);
}

warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']);
warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]);
warnTheSheep(["sheep", "sheep", "sheep", "wolf"]);

