# Exercícios fundamentos I - Resolução

```javascript
// Ex1
console.log((5 * 6) / 2);
```

```javascript
// Ex2
const num = Math.ceil(Math.random() * 10);
const numUser = prompt("Insira um número");
console.log(num == numUser);
```

```javascript
// Ex3
const num1 = prompt("Insira um número");
const num2 = prompt("Insira outro número");
console.log(num1 * num2);
console.log(num1 / num2);
```

```javascript
// Ex4
const num = parseFloat(prompt("Insira temperatura em Celsius"));
console.log((9 * num) / 5 + 32);
```

```javascript
// Ex5
const num = parseInt(prompt("Insira um número"));
console.log(num - 13);
```

```javascript
// Ex6
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
const sum = num1 + num2;
if (num1 == num2) {
  console.log(sum * 3);
} else {
  console.log(sum);
}
```

```javascript
// Ex7
const num = parseInt(prompt("Insira um número"));
const dif = Math.abs(num - 19);
if (num > 19) {
  console.log(dif * 3);
} else {
  console.log(dif);
}
```

```javascript
// Ex8
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
if (num1 == 50) {
  console.log(true);
} else if (num2 == 50) {
  console.log(true);
} else if (num1 + num2 == 50) {
  console.log(true);
} else {
  console.log(false);
}
```

```javascript
// Ex9
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
if (num1 < 0) {
  console.log(`Negativo: ${num1}`);
} else if (num1 > 0) {
  console.log(`Positivo: ${num1}`);
}
if (num2 < 0) {
  console.log(`Negativo: ${num2}`);
} else if (num2 > 0) {
  console.log(`Positivo: ${num2}`);
}
```

```javascript
// Ex10
const num = parseInt(prompt("Insira um número"));
if (num % 3 == 0) {
  console.log(`${num} múltiplo de 3`);
} else if (num % 7 == 0) {
  console.log(`${num} múltiplo de 7`);
}
```

```javascript
// Ex11
const num = parseInt(prompt("Insira um número"));
if (num >= 50 && num <= 100) {
  console.log(true);
} else {
  console.log(false);
}
```

```javascript
// Ex12
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
if (num1 >= 50 && num1 <= 100) {
  console.log(true);
} else {
  console.log(false);
}
if (num2 >= 50 && num2 <= 100) {
  console.log(true);
} else {
  console.log(false);
}
```

```javascript
// Ex13
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
const num3 = parseInt(prompt("Insira mais um número"));
if (num1 >= 50 && num1 <= 100) {
  console.log(true);
} else {
  console.log(false);
}
if (num2 >= 50 && num2 <= 100) {
  console.log(true);
} else {
  console.log(false);
}
if (num3 >= 50 && num3 <= 100) {
  console.log(true);
} else {
  console.log(false);
}
```

```javascript
// Ex14
const str = prompt("Insira uma string");
console.log(str.includes("Script"));
```

```javascript
// Ex15
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
const num3 = parseInt(prompt("Insira mais um número"));
let max = num1;
if (num2 > max) {
  max = num2;
}
if (num3 > max) {
  max = num3;
}
console.log(max);
```

```javascript
// Ex16
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
const dif1 = Math.abs(100 - num1);
const dif2 = Math.abs(100 - num2);
if (dif1 > dif2) {
  console.log(num2);
} else {
  console.log(num1);
}
```

```javascript
// Ex17
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
  console.log(true);
} else if (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100) {
  console.log(true);
} else {
  console.log(false);
}
```

```javascript
// Ex18
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
if (num1 < 40 || num2 < 40) {
  console.log(false);
} else if (num1 > 60 || num2 > 60) {
  console.log(false);
} else {
  if (num1 < num2) {
    console.log(num2);
  } else {
    console.log(num1);
  }
}
```

```javascript
// Ex19
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
const sum = num1 + num2;
if (sum >= 50 && sum <= 80) {
  console.log(65);
} else {
  console.log(80);
}
```

```javascript
// Ex20
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
const sum = num1 + num2;
const dif = Math.abs(num1 - num2);
if (num1 == 8 || num2 == 8) {
  console.log(true);
} else if (sum == 8 || dif == 8) {
  console.log(true);
} else {
  console.log(false);
}
```

```javascript
// Ex21
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
const num3 = parseInt(prompt("Insira mais um número"));
const dif12 = num1 - num2;
const dif13 = num1 - num3;
if (dif12 == 0 && dif13 == 0) {
  console.log(40);
} else if (dif12 && dif13) {
  console.log(20);
} else {
  console.log(30);
}
```

```javascript
// Ex22
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
const num3 = parseInt(prompt("Insira mais um número"));
if (num1 >= 20 && num1 < num2 && num1 < num3) {
  console.log(true);
} else if (num2 >= 20 && num2 < num1 && num2 < num3) {
  console.log(true);
} else if (num3 >= 20 && num3 < num1 && num3 < num1) {
  console.log(true);
} else {
  console.log(false);
}
```

```javascript
// Ex23
const months = [
  "Janeiro",
  "Fevereiro",
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
const today = new Date();
console.log(`
    ${today.getUTCDate()}, ${months[today.getUTCMonth()]}, ${today.getUTCFullYear()}\n
    ${today.getUTCHours()}:${today.getUTCMinutes()}:${today.getUTCSeconds()}
    `);
```

```javascript
// Ex24
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
const num3 = parseInt(prompt("Insira mais um número"));
const alg1 = num1 % 10;
const alg2 = num2 % 10;
const alg3 = num3 % 10;
if (alg1 == alg2) {
    console.log(true);
} else if (alg1 == alg3) {
    console.log(true);
} else if (alg2 == alg3) {
    console.log(true);
} else {
    console.log(false);
}
```

```javascript
// Ex25
const dayOfWeek = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];
const today = new Date();
console.log(`
    ${dayOfWeek[today.getUTCDay()]}\n
    ${today.getUTCDate()}/${today.getUTCMonth() + 1}/${today.getUTCFullYear()}
    `);
```

```javascript
// Ex26
let name = prompt("Insira o seu nome");
for (let i = 0; i < name.length; i++) {
    name = name[name.length - 1] + name.substring(0, name.length - 1);
    console.log(name);
}
```

```javascript
// Ex27
const year = parseInt(prompt("Insira um ano"));
console.log((year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0));
```

```javascript
// Ex28
for (let year = 2014; year <= 2050; i++) {
    const date = new Date(year, 0, 1);
    if (date.getUTCDay() == 0) {
        console.log(date);
    }
}
```

```javascript
// Ex29
const today = new Date();
const xmas = new Date(today.getUTCFullYear(), 11, 25);
if (today.getUTCMonth() == 11 && today.getUTCDate() > 25) {
    xmas.setUTCFullYear(today.getUTCFullYear() + 1);
}
const daysUntilXmas = Math.ceil((today - xmas) / 1000 * 60 * 60 * 24);
console.log(daysUntilXmas);
```

```javascript
// Ex30
console.log(location.href);
```

```javascript
// Ex31
const str = prompt("Insira uma string");
if (str.startsWith("Py")) {
    console.log(str);
} else {
    console.log(`Py${str}`);
}
```

```javascript
// Ex32
const pos = parseInt(prompt("Insira a posição a remover da palavra JavaScript"));
const str = "JavaScript";
const tmp = str.split("");
tmp.splice(pos - 1, 1);
const newStr = tmp.join("");
console.log(newStr);
```

```javascript
// Ex33
const str = prompt("Insira uma string");
if (str.length > 1) {
    const firstChar = str.charAt(0);
    const lastChar = str.charAt(str.length - 1);
    const tmpStr = str.slice(1, str.length - 1);
    console.log(`${lastChar}${tmpStr}${firstChar}`);
}
```

```javascript
// Ex34
const str = prompt("Insira uma string");
const firstChar = str.charAt(0);
console.log(`${firstChar}${str}${firstChar}`);
```

```javascript
// Ex35
const str = prompt("Insira uma string");
if (str.length > 2) {
    const lastThree = str.slice(str.length - 3, str.length);
    console.log(`${lastThree}${str}${lastThree}`);
}
```

```javascript
// Ex36
const str = prompt("Insira uma string");
console.log(str.startsWith("Java"));
```

```javascript
// Ex37
const str = prompt("Insira uma string");
console.log(str.replace("Script", ""));
```

```javascript
// Ex38
const str = prompt("Insira uma string");
const char = prompt("Insira uma letra");
const index = str.indexOf(char);
if (index >= 2 && index <= 4) {
    console.log(true);
} else {
    console.log(false);
}
```

```javascript
// Ex39
const num1 = parseInt(prompt("Insira um número"));
const num2 = parseInt(prompt("Insira outro número"));
const num3 = parseInt(prompt("Insira mais um número"));
const alg1 = num1 % 10;
const alg2 = num2 % 10;
const alg3 = num3 % 10;
if (alg1 == alg2 && alg1 == alg3) {
    console.log(true);
} else {
    console.log(false);
}
```

```javascript
// Ex40
const str = prompt("Insira uma string");
if (str.length < 3) {
    console.log(str.toUpperCase());
} else {
    console.log(`${str.substring(0, 3).toLowerCase()}${str.substring(3)}`);
}
```
