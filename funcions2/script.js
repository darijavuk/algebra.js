/**
 * Napišite program koji će raditi sljedeće:
 * 1. Tražit će unos dva broja i oba broja će spremiti u varijable
 * 2. Ispisat će zbroj, razliku, umnožak i kvocijent ta dva broja


const number1Input = prompt("Unesite prvi broj:");
const number2Input = prompt("Unesite drugi broj:");

const number1 = parseFloat(number1Input);
const number2 = parseFloat(number2Input);

if (isNaN(number1) || isNan(number2)) {
    alert("Molimo unesite valjane brojeve.");
}   else if (number2 === 0) {
    alert("Djeljenje s nulom nije dopušteno");
}
    else {
        const sum = number1 + number2;
        const difference = number1 - number2;
        const product = number1 * number2;
        const quotient = number1 / number2;

    alert("Zbroj: " + sum + "\n" +
        "Razlika: " + difference + "\n" +
        "Umnožak: " + product + "\n" +
        "Kvocijent: " + quotient);
}
SKRAĆIVANJE U FUNKCIJE S NADODANOM TREĆOM VRIJEDNOSTI 
- PRVE DVIJE FAZE (zadnja faza se nalazi u dokumentu "funkcije"):

primjer funkcije s nizom brojeva: 

function add(...args) {
    return a + b + c + d;
}
    
 */ 


const number1 = readNumber("Unesite prvi broj:");
const number2 = readNumber("Unesite drugi broj:");
const number3 = readNumber();

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert("Molimo unesite valjane brojeve.");
}   else if (number2 === 0 || number3 === 0) {
    alert("Djeljenje s nulom nije dopušteno");
}   else {
        const sum = number1 + number2 + number3; 
        const difference = number1 - number2 - number3;
        const product = number1 * number2 * number3;
        const quotient = number1 / number2 / number3;

    alert("Zbroj: " + sum + "\n" +
        "Razlika: " + difference + "\n" +
        "Umnožak: " + product + "\n" +
        "Kvocijent: " + quotient);
}

function add(...args) {
    return a + b + c + d;
}

function readNumber(text = "Unesite broj:") {
    const numberInput = prompt(text);
    const numberValue = parseFloat(numberInput);
    return numberValue;
}

