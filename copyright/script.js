/** 
 *  (C) 2025 Darija Vuković

function copyright(holder) {
    const date = new Date();
    const year = date.getFullYear();
    console.log(`© ${year} ${holder}`);
}

copyright("Darija Vuković");


 * 1. U HTML dokument dodati <div> element s ID-em "copyright".
 * 2. U JS datoteci selektirati element iz točke 1.
 * 3. u selektirani element upisati (C) ${year} ${holder} tekst (umjesto console.log)
 * 
*/


function copyright(element, holder) {
    const date = new Date();
    const year = date.getFullYear();
    element.innerHTML = `&copy; ${year} ${holder}`;
}

const element = document.querySelector('#copyright');
copyright(element, "Domagoj Štrekelj");