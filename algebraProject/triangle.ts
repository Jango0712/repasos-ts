import { point } from './point'

export class triangle {
private vertex1 : point
private vertex2 : point
private vertex3 : point
constructor(vertex1:point, vertex2:point, vertex3:point){
this.vertex1 = vertex1
this.vertex2 = vertex2
this.vertex3 = vertex3
}
calculateLengthSides() : number[]{
  let lados : number[]= []
lados.push(this.vertex1.calculateDistance(this.vertex2))
lados.push(this.vertex2.calculateDistance(this.vertex3))
lados.push(this.vertex3.calculateDistance(this.vertex1))
return lados
}
}
