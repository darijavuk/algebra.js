var firstName = "Darija";
let age = 51;
let height = 1.68;
const isTeaching = true;

console.log(typeof firstName);
console.log(firstName, age, isTeaching);

console.log(firstName, firstName.toLocaleUpperCase(firstName));

const bio = "Zovem se Darija.\nImam 51. godinu.\nGrafička sam dizajnerica.";
console.log(bio);
console.log(firstName.toLocaleUpperCase());
console.log(firstName.charAt(2));




const inputA = prompt("Unesite dužinu stranice a");
const inputB = prompt("Unesite dužinu stranice b");

const a = parseFloat(inputA);
const b = parseFloat(inputB);

if (isNaN(a) ||  isNaN(b)) {
    alert("Unesene vrijednosti nisu valjani brojevi.");
} else if (a <= 0 || b <= 0) {

} else {
    const area = a * b;
    alert("Površina pravokutnika je:" + area);

    const perimeter = 2 * (a + b);
    alert("Opseg pravokutnika je:" + perimeter);

    const diagonal = Math.sqrt(a * a + b * b);
    alert("Dijagonala pravokutnika je:" + diagonal.toFixed(2));
}











