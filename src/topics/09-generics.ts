

export function whatsMyType<T>(argument:T):T{ //El tipo de dato es generico al poner <T> y lo leera como el tipo de dato que se ha introducido por el ()

    return argument;
}

let amIString = whatsMyType<string>("Hola mundo");/*Pongo el <> PARA FORZAR LA ENTRADA SI O SI A ESE TIPO */
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));