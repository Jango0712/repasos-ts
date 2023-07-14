let  zodiaco = (dia:number, mes:number): string => {
if(mes<1 || mes>12 || dia<1 || dia>31){
    return "fecha invalida"
} else if((mes ==2 && dia > 29) || (mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30){
    return "fecha invalida"
}
if((mes == 1 && dia <= 20) || (mes == 12 && dia >= 22)){
    return "capricornio"
}
else if((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)){
    return "acuario" 
}
else if((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)){
    return "piscis" 
}
else if((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)){
    return "aries" 
}
else if((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)){
    return "tauro" 
}
else if((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)){
    return "geminis" 
}
else if((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)){
    return "cáncer" 
}
else if((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)){
    return "leo" 
}
else if((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)){
    return "virgo" 
}
else if((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)){
    return "libra" 
}
else if((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)){
    return "escorpio" 
}
else if((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)){
    return "sagitario" 
}
else{
    return "fecha invalida"
}
}

console.log(zodiaco(7,12))

let continent =(country:string):void =>{
    if((country == "España") || (country == "Francia") || (country == "Portugal") || (country == "Alemania") || (country == "Italia")){
        console.log("Europa")
    }
    else if((country == "Venezuela") || (country == "USA") || (country == "Argentina") || (country == "Brasil") || (country == "Mexico")){
        console.log("America")
    }
    else if((country == "China") || (country == "Japon") || (country == "Indonesia") || (country == "India") || (country == "Corea del sur")){
        console.log("Asia")
    }
    else if((country == "Sudáfrica") || (country == "Nigeria") || (country == "Kenia") || (country == "Marruecos") || (country == "Ghana")){
        console.log("Africa")
    }
    else if((country == "Nueva Zelanda") || (country == "Australia") || (country == "Samoa") || (country == "Vanuatu") || (country == "Kiribati")){
        console.log("Oceania")
    }
    else{
        console.log("País no valido")
    }

}

continent("España");
 continent("Venezuela"); 
 continent("Japon"); 
 continent("Nigeria"); 
 continent("Australia");

let isEven =(x:number):void =>{
    if(x % 2 === 0){
        console.log("el número es par")
    }
    else{
        console.log("el número es impar")
    }
}

isEven(6)
isEven(3)

