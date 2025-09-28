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

    