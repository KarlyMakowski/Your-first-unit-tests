// importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", () => {
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("Get the value of dollars in yens", () => {
    expect(fromDollarToYen(3.5)).toBe(447.65000000000003) //  3.5(valor inicial de €)/1.2(valor del dolar) * 127.9 (valor del euro en yens)
});

test("Get the value of yens in pounds", () => {
    expect(fromYenToPound(3.5)).toBe(2.8000000000000003)
});

