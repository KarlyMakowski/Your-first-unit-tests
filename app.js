console.log("Hello World");

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (valueInEuro) => { // declaramos una funcion con el mismo nombre "fromEuroToDollar"
    return valueInEuro * oneEuroIs["USD"];
}

const fromDollarToYen = (valueInDollar) => {
    return valueInDollar * oneEuroIs["JPY"];
}

const fromYenToPound = (valueInYen) => {
    return valueInYen * oneEuroIs["GBP"];
}

console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(3.5));
console.log(fromYenToPound(3.5));

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };