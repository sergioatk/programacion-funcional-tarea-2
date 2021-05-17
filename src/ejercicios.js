import { reduce } from 'lodash';
import fp from 'lodash/fp';

export const fibo = (n, secuencia = [1, 1]) => {
    const posicionFinal = secuencia.length - 1;
    if (n <= secuencia.length) return secuencia[n - 1];

    const ultimoNum = secuencia[posicionFinal];
    const anteultimoNum = secuencia[posicionFinal - 1];
  
    return fibo(n, [...secuencia, ultimoNum + anteultimoNum]);
}



export const factorial = (numero) => {
    if (numero === 0 || numero === 1) return 1;
    return numero * factorial(numero - 1);
};

export const multiplicacion = array => {
    const respuesta = array.reduce((a,b) => a * b, 1);
    return respuesta;
};

// Funciones de lodash/fp que les pueden ser útiles a partir de este punto:
// Las vistas en la clase (particularmente fp.flow y fp.curry)
// fp.sortBy (para ordenar un array)
// fp.reverse (para dar vuelta un array)
// fp.first (para obtener el primer valor de un array)

export const atributo = propiedad => objeto => objeto[propiedad];



const pruebaMultiplicarAtributo = (atributo, objeto) => {
    const resultado = objeto[atributo].reduce((acc, num) => acc * num);
    
    return resultado

};
 

export const multiplicarAtributo = fp.curry(pruebaMultiplicarAtributo);


const pruebaOrdenarPor = (atributo, persona) => {
    return fp.reverse(fp.sortBy([function(p) {return p[atributo]}], persona))
}

export const ordenarPor = fp.curry(pruebaOrdenarPor);


export const mayorPersona = arrayPersonas => {
    const nuevoArray = fp.reverse(fp.sortBy([function(p) {return p.edad} ], arrayPersonas));
    return nuevoArray[0].nombre;
}
