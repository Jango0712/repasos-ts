var evenNumbers = function (x) {
    for (var i = 1; i <= x; i += 2) {
        console.log(i);
    }
};
evenNumbers(20);
var myRevert = function (myArr) {
    var result = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        result.push(myArr[i]);
    }
    return result;
};
var arr = ["jose", "carlos", "jan"];
console.log(myRevert(arr));
var isRaimbow = function (colores) {
    var raimbow = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"];
    for (var i = 0; i <= colores.length - 1; i++) {
        if (raimbow.includes(colores[i])) {
            console.log("".concat(colores[i], " es un color del arcoiris"));
        }
        else {
            console.log("".concat(colores[i], " no es un color del arcoiris"));
        }
    }
};
var raimbow = ["azul", "verde", "rojo", "gris", "marron", "violeta", "amarillo"];
isRaimbow(raimbow);
var add = function (arr) {
    var suma = 0;
    for (var i = 0; i < arr.length; i++) {
        suma += arr[i].length;
    }
    return suma;
};
var array = ["jan", "mar", "leo"];
console.log(add(array));
