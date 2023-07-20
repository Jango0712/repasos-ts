import { point } from './point'
import { triangle } from './triangle'
const miPunto = new point(3, 2)
const miPunto2 = new point(7,4)
const miPunto3 = new point(3,1)
const triangulo = new triangle(miPunto,miPunto2,miPunto3)
console.log(triangulo)
console.log(triangulo.calculateLengthSides())