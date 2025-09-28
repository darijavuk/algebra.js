

const inputRadius = prompt("Unesite radijus kruga:");

const radius = parseFloat(inputRadius);

if (isNaN(radius) || radius <= 0) {
  console.log("Molimo unesite pozitivan broj za radijus.");
} else {
  const pi = Math.PI;
  const scope = 2 * pi * radius;
  const surface = pi * Math.pow(radius, 2);

  console.log(`Za radijus ${radius}:`);
  console.log(`Opseg kruga je: ${scope.toFixed(2)}`);
  console.log(`Površina kruga je: ${surface.toFixed(2)}`);
}