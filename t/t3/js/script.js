const carro1 = {
  n_rodas: 4,
  marca: "Ferrari",
};
const pessoa = {
  nome: "Pedro",
  idade: 42,
  sexo: "Masculino",
  vei: carro1,
};
console.log(typeof pessoa);
console.log(pessoa);
console.log(pessoa.nome);
if (pessoa.nome == "Pedro") {
  console.log("Ele é o Pedro");
}
console.log(pessoa.vei.n_rodas);
const nome2 = "André";
const pessoa2 = {
  nome: nome2,
};
console.log(pessoa2.nome);
console.log(pessoa2.nome.toUpperCase());

const pessoa3 = {
  nome: "João",
  data_nascimento: new Date(),
};
console.log(pessoa3.data_nascimento.getUTCFullYear());
if (pessoa3.data_nascimento.getUTCFullYear() != 2019) {
  console.log("Não nasci em 2019");
}

const pessoa4 = {
  vei: ["Ferrari", "Mercedes"],
};
console.log(pessoa4.vei);
const carro2 = {
  n_rodas: 4,
  marca: "Mercedes",
};
const pessoa5 = {
  vei: [carro1, carro2],
};

console.log(pessoa5);
const arr1 = new Array();
const arrl = [];

console.log(Math.random()); // 0 a 1 (1 exclusivo)
console.log(Math.random() * 100); // 0 a 100 (100 exclusivo)
console.log(Math.floor(Math.random() * 100)); // 0 a 100 (100 exclusivo)
console.log(Math.round(5.4)); // 5
console.log(Math.round(5.6)); // 6
console.log(Math.round(5.5)); // 6

// 10 a 20
console.log(Math.floor(Math.random() * 10) + 10);

console.log(Math.pow(2, 2), 2 ** 2);

console.log("DIIIIIVVVVV");
let j = 0;
while (j < 5) {
  console.log(j++);
}
j = 0;
while (j < pessoa5.vei.length) {
  console.log(pessoa5.vei[j]);
  j++;
}
const arr2 = [2, 1, 3, 6, 8];
j = 0;
do {
  console.log(arr2[j]);
  j++;
} while (j < arr2.length);

console.log("DDDDIIIIIIVVV");
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

for (const elemento of arr2) {
  console.log(elemento);
}

for (const key in pessoa) {
  console.log(key, pessoa[key]);
}

// While, Do While, For, For Of (For Each c#), For In
// break; continue;
// const arr2 = [2, 1, 3, 6, 8];
for (const elem of arr2) {
  if (elem == 6) {
    break;
  }
  console.log(elem); // 2, 1, 3
}
console.log("DDDDIIIIIIVVV");
for (const elem of arr2) {
  if (elem == 6) {
    continue;
  }
  console.log(elem); // 2, 1, 3, 8
}

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const elem of arr3) {
  if (elem % 2 == 0) {
    if (elem != 6) {
      console.log(elem);
    }
  }
}
for (const elem of arr3) {
  if (elem % 2 != 0) {
    continue;
  }
  if (elem == 6) {
    continue;
  }
  console.log(elem);
}
console.log("DDDDIIIIIIVVV");
arr3.forEach(function (elem) {
  console.log(elem);
});
const str1 = "Hello World";
for (const c of str1) {
  console.log(c);
}

// Ex19
const var1 = 15;
const var2 = 50;
const sum = var1 + var2;
if (sum >= 50 && sum <= 80) {
  console.log(65);
} else {
  console.log(80);
}

// Ex32
const pos = parseInt("4");
const str = "JavaSript";
const tmp = str.split("");
console.log(tmp);
tmp.splice(pos - 1, 1);
console.log(tmp);
const novaStr = tmp.join("");
console.log(novaStr);

// Ex39
const numStr1 = "13";
const numStr2 = "63";
const numStr3 = "73";

if (
  numStr1[numStr1.length - 1] == numStr2[numStr2.length - 1] &&
  numStr2[numStr2.length - 1] == numStr3[numStr3.length - 1]
) {
  console.log(true);
} else {
  console.log(false);
}

const num1 = parseInt(numStr1);
const num2 = parseInt(numStr2);
const num3 = parseInt(numStr3);
const div1 = Math.abs(num1 % 10);
const div2 = Math.abs(num2 % 10);
const div3 = Math.abs(num3 % 10);

console.log(div1 == div2 && div1 == div3);

// Ex29
const today = new Date();

const natal = new Date(today.getUTCFullYear(), 11, 25);
if (today.getUTCMonth() == 11 && today.getUTCDate() > 25) {
  natal.setUTCFullYear(today.getUTCFullYear() + 1);
}
console.log(Math.ceil((natal - today) / (1000 * 60 * 60 * 24)));

// Ex30
console.log(location.href);

// var vs let vs const
if (true) {
    const ola = 1;
    // var ola = 1;
    console.log(ola); // ???
}
console.log(ola); // ???

function fn1() {}
const fn2 = () => {};

