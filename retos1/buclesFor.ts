const evenNumbers = (x:number):void =>{
    for(let i :number = 1; i <= x; i+=2){
        console.log(i)
    }
}

evenNumbers(20)

const myRevert = <T>(myArr:T[]):T[] =>{
const result:T[] =[];
for(let i=myArr.length-1; i>=0; i--){
    result.push(myArr[i])
}
return result
};

let arr:string[] = ["jose","carlos","jan"];

console.log(myRevert(arr))

const isRaimbow = (colores:string[]):void=>{
    const raimbow : string[] =["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"]
for(let i:number = 0; i<=colores.length-1; i++){
    if(raimbow.includes(colores[i])){
        console.log(`${colores[i]} es un color del arcoiris`)
    }
    else{console.log(`${colores[i]} no es un color del arcoiris`)}
}
}

let raimbow : string[] = ["azul", "verde", "rojo", "gris", "marron", "violeta", "amarillo"];

isRaimbow(raimbow)

const add = (arr:string[]):number =>{
    let suma:number = 0;
    for(let i:number=0;i < arr.length; i++){
        suma += arr[i].length
    }
    return suma
}

let array:string[] =["jan","mar","leo"];
console.log(add(array));
