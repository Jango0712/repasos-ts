import { point } from './point'

const miPunto = new point(3, 2)
const miPunto2 = new point(7,4)
const miPunto3 = new point(3,1)
const miPunto4 = new point(3,4)
const miPunto5 = new point(5,4)
const arrPuntos : point[] = [miPunto2,miPunto3,miPunto4,miPunto5]  
console.log(miPunto.getX())
console.log(miPunto.getY())
miPunto.setX(5)
miPunto.setY(10)
console.log(miPunto.getX())
console.log(miPunto.getY())
console.log(miPunto.toString())
console.log(miPunto.distanceToOrigin())
console.log(miPunto.calculateDistance(miPunto2))
console.log(miPunto.calcularQuadrant())
console.log(miPunto.calculateNearest(arrPuntos))

