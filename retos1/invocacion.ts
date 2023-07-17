import { isEven } from './condicionales'
import { add } from './buclesFor'

const arr1 = ['Casa', 'Coche','Ciudad','Cesta']
const arr2 = ['Barco','Baca','Bicicleta','Balon','Bisiesto','Brasil']
const arr3 = ['Venezuela', 'Veneno', 'Voltaje']

const numero1 = add(arr1)
const numero2 = add(arr2)
const numero3 = add(arr3)

console.log(numero1)
console.log(numero2)
console.log(numero3)
isEven(numero1)
isEven(numero2)
isEven(numero3)