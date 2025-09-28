
/**

console.log("Fizz count:", fizzCount);
console.log("Buzz count:", buzzCount);
console.log(`FizzBuzz count: ${fizzBuzzCount}`);

let j = 1;

do 
    (let text = ''; 
    if (j % 3 === 0) text += 'Fizz';
    if (j % 5 === 0) text += 'Buzz';
    console.log(text === '' ? j : text);
    j++;
} while (j <= 15);

let k = 1;
while (k <= 15)  {
    let text = '';
    if (k % 3 === 0) text += 'Fizz';
    if (k % 5 === 0) text += 'Buzz';
    console.log(text === '' ? k : text);
    k++;
} 


DRUGI STUPANJ::
 * 
 * Vratite se u zadatak kojeg ste već radili FIZZBUZZ
 * 
 * Doradite FizzBuzz tako da:
 * 1. Napišete funkciju koja se zove fizzBuzz()
 * 2. Funkcija prima četiri parametra:
 * 2a. "start" - početni broj (npr 1)
 * 2b. "end" - završni broj (npr 100)
 * 2c. "fizzNum" - broj za koji će se ispisati "Fizz" (npr 3)
 * 2d. "buzzNum" - broj za koji će se ispisati "Buzz" (npr 5)
 * 3. Funkcija ispisuje brojeve od "start" do "end"
 * 4. Za brojeve djeljive s "fizzNum", ispišite "Fizz" umjesto broja
 * 5. Za brojeve djeljive s "buzzNum", ispišite "Buzz" umjesto broja
 * 6. Za brojeve djeljive sa oba, ispišite "FizzBuzz"
 * 7. Za ostale brojeve, ispišite sam broj.
 * 
 * Pozovite funkciju fizzBuzz() koristeći parametre koje pročitate 
 * preko prompt() od korisnika
 * 

function fizzBuzz(start, end, fizzNum, buzzNum) {
    let i = start;

    while (i <= end)  {
        let text = '';
        if (i % fizzNum === 0) text += 'Fizz';
        if (i % buzzNum === 0) text += 'Buzz';
        
        console.log(text === '' ? k : text);
        
        i++;
    } 
} 

console.log("...")
fizzBuzz(1, 15, 2, 7)

 */
/*
 
let fizzCount = 0;
let buzzCount = 0;
let fizzBuzzCount = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz!");
    fizzBuzzCount++;
  } else if (i % 3 === 0) {
    console.log("Fizz!");
    fizzCount++;
  } else if (i % 5 === 0) {
    console.log("Buzz!");
    buzzCount++;
  } else {
    console.log(i);
  }
}

console.log("Fizz count:", fizzCount);
console.log("Buzz count:", buzzCount);
console.log(`FizzBuzz count: ${fizzBuzzCount}`);



FizzBuzz doradite:

1. Umjesto da ispisujete rezultate u konzolu:
1a. Prije pokretanja FizzBuzz funkcije kreirajte zul> element u HYML-u
1b. Svaki rezultat se ispisuje kao <li> stavka unutar kreiranog <ul> elementa
2. Nakon što se svi rezultati ispišu, ispod <ul> elementa ispišite ukupan broj "Fizz", "Buzz" i "FizzBuzz" savki
koje su ipisane (može u <div> element kojeg ste kreirali)

Zahtjeva manipulaciju DOM-om
*/

    let fizzCount = 0;
    let buzzCount = 0;
    let fizzBuzzCount = 0;

    const container = document.getElementById("fizzbuzz-container");

    // Kreiraj listu
    const list = document.createElement("ul");

    for (let i = 1; i <= 100; i++) {
      let value = "";

      if (i % 3 === 0 && i % 5 === 0) {
        value = "FizzBuzz!";
        fizzBuzzCount++;
      } else if (i % 3 === 0) {
        value = "Fizz!";
        fizzCount++;
      } else if (i % 5 === 0) {
        value = "Buzz!";
        buzzCount++;
      } else {
        value = i;
      }

      // Dodaj svaki rezultat u <li>
      const li = document.createElement("li");
      li.textContent = value;
      list.appendChild(li);
    }

    // Dodaj listu u container
    container.appendChild(list);

    // Dodaj statistiku
    const stats = document.createElement("div");
    stats.innerHTML = `
      <p>Fizz count: ${fizzCount}</p>
      <p>Buzz count: ${buzzCount}</p>
      <p>FizzBuzz count: ${fizzBuzzCount}</p>
    `;
    container.appendChild(stats);

    /**
function createListItem(text) {
    const li = document.createElement("li");
    li.innerText = text;
    return li;
} 
     */