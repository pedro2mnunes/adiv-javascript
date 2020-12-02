const n = 25;

if (n < 100) {
  console.log("n < 100");
} else if (n < 50) {
  console.log("n < 50");
}

const mes = "jan";

let n_dias;

switch (mes) {
  case "jan":
  case "mar":
  case "mai":
  case "jul":
  case "ago":
  case "out":
  case "dez":
    n_dias = 31;
    break;
  case "fev":
    n_dias = 28;
    break;
  case "abr":
  case "jun":
  case "set":
  case "nov":
    n_dias = 30;
    break;
  default:
    console.error("Mes errado");
}

console.log(n_dias);

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log("DIVVV");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("DIVVV");
console.log(true != true); // false
console.log(false != true); // true
console.log(false != true); // true
console.log(false != false); // false

console.log("ex11");
const n1 = 5;
if (n1 >= 50 && n1 <= 100) {
  console.log(true);
} else {
  console.log(false);
}
if (n1 < 50) {
  console.log(false);
} else if (n1 > 100) {
  console.log(false);
} else {
  console.log(true);
}
if (n1 < 50 || n1 > 100) {
  console.log(false);
} else {
  console.log(true);
}
if (((n1 >= 50 && n1 <= 100) || (n1 >= 150 && n1 <= 200)) && n1 % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}
function prettyDate(date) {
  return `${date.getUTCDate()}/${
    date.getUTCMonth() + 1
  }/${date.getUTCFullYear()}`;
}

const d1 = new Date();
console.log(prettyDate(d1));

const d2 = new Date(2019, 11, 1);
console.log(prettyDate(d2));
console.log(d2);

const d3 = new Date(2018, 10, 5, 15, 30, 0, 0);
console.log(d3);
d3.setFullYear(0);
console.log(d3);

const hoje = new Date(Date.now());
const months = [
  "Janeiro",
  "Feveiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const str =
  hoje.getUTCDate() +
  "," +
  months[hoje.getUTCMonth()] +
  "," +
  hoje.getUTCFullYear();
console.log(str);

const string1 = "Aspas";
const string2 = "Pelicas";
const string3 = `Graves`;
const string4 = "I don't";
const string5 = 'Enunciar: "Enunciado"';
const string6 = `${hoje.getUTCDate()}, ${
  months[hoje.getUTCMonth()]
}, ${hoje.getUTCFullYear()}`;

console.log(string1, string2, string3);
console.log(string4);
console.log(string5);
console.log(string6);

const str2 = "djkslajdslkajldaJavaScriptlkasjdlkajsdlk";
if (str2.indexOf("Java") != -1) {
  console.log(true);
} else {
  console.log(false);
}

console.log(string3 + " - " + string4);
console.log(`${string3} - ${string4}`);
console.log(string3.concat(" - ", string4));

const arr1 = ["h", "e", "l"];
const str3 = "hel";

const arr2 = [1, "string", 10.9, new Date()];
console.log(arr2);
console.log(arr2.length);
arr2.push(100);
console.log(arr2);
console.log(arr2.length);
arr2.pop();
console.log(arr2);
console.log(arr2.length);
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals);
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(2, 3));
// expected output: Array ["camel"]
console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
// ex 14
const valor = prompt("String");
if ((valor.indexOf("Script") != -1) == true) {
  console.log(true);
} else {
  console.log(false);
}
if (valor.includes("Script") == true) {
  console.log(true);
} else {
  console.log(false);
}
console.log(valor.indexOf("Script") != -1);
console.log(valor.includes("Script"));
// ex 23
const today = new Date();
const meses = [
  "Janeiro",
  "Feveiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
console.log(
  `${today.getUTCDate()}, ${
    meses[today.getUTCMonth()]
  }, ${today.getUTCFullYear()}\n${today.getUTCHours()}:${today.getUTCMinutes()}:${today.getUTCSeconds()}`
);
