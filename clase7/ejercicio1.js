class Hero {
    nombre
    posicion
    vida
    dano
    experiencia

    constructor(nombre){
        this.nombre = nombre === undefined ? "heroe" : nombre;
        this.posicion = '00';
        this.vida = 100;
        this.dano = 5;
        this.experiencia = 0;
    }

}

let miheroe = new Hero();
console.log(miheroe);