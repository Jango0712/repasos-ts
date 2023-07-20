export class point {
    private x :number;
    private y : number;
    constructor(x:number, y:number){
        this.x= x;
        this.y= y;
    }
   public getX():number {
    
        return this.x
    }
    
 public setX(x:number):void {
    this.x = x
 }

 public getY():number {
    
    return this.y
}

public setY(y:number):void {
this.y = y
}

public toString(): string {
    return (`${this.x},${this.y}`)
}

distanceToOrigin():number{
    return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
}

public calculateDistance(anotherPoint:point):number{
return Math.sqrt(Math.pow(this.x - anotherPoint.x, 2) + Math.pow(this.y - anotherPoint.y, 2))
}
 public calcularQuadrant():number{
if(this.x >= 0 && this.y >= 0){
    return 1
}
else if(this.x < 0 && this.y >= 0){
    return 2
}
else if(this.x < 0 && this.y < 0){
    return 3
}
else{
    return 4
}}
 
 public calculateNearest(points:point[]):point{
    let distanceShort  = this.calculateDistance(points[0])
    let punto = points[0] 
for(let cordenadas of points){
    if(this.calculateDistance(cordenadas) < distanceShort){
    distanceShort = this.calculateDistance(cordenadas)
    punto = cordenadas
   }
 }
 return punto
 }
}