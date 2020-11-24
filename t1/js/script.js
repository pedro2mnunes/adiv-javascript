const x = 6;
const y = 2;

let sum = x + y;
let sub = x - y;
console.log(sum, sub);

let mul = x * y;
let div = x / y;
console.log(mul, div);

let rem1 = x % y;
let rem2 = 5 % y;
console.log(rem1, rem2);

let exp = y ** 2;
console.log(exp);

const num = 2;
const str = "auto";
const arr = [1, 2, 3];
console.log(typeof num, typeof str, typeof arr);

console.log(3 == 3); // true
console.log(3 == "3"); // true

console.log(3 === 3); // true
console.log(3 === "3"); // false

console.log("DIVVV");

console.log(3 != 4); // true
console.log(3 !== 4); // true

console.log(3 != "3"); // false
console.log(3 !== "3"); // true

if (3 == 4) {
  console.log("OLA");
}

// Se a variavel for igual a 5, fazer console.log da mesma.
/*
            const ex1 = prompt("Insira a sua variavel");
            if (ex1 == 5) {
                console.log(ex1);
            } else {
                console.log("Não é 5");
            }
            */

console.log("DIIVVV");
console.log(3 < 4); // true
console.log(3 > 4); // false

console.log(4 <= 4); // true
console.log(3 <= 4); // true
console.log(3 >= 4); // false

// Se a variavel for menor 5, fazer console.log da mesma.
// Se a variavel for maior ou igual 7, fazer console.log da mesma.
const ex2 = prompt("Insira a sua variavel - ex2");

if (ex2 < 5) {
  console.log("<5");
} else if (ex2 >= 7) {
  console.log(">=7");
} else {
  // 5, 6
  console.log("Não é nada.");
}
