// Maneira original
function foo(param1, param2) {
  console.log(param1, param2);
}
foo("Hello", "World");

// Arrow function
const bar = (param1, param2) => {
  console.log(param1, param2);
};
bar("Hello", 2);

function soma(n1, n2) {
  console.log(n1 + n2);
}
soma(1, 2);
soma("1", 2);

function tamanho(arr) {
  console.log(arr.length);
}
tamanho("Hello");
tamanho(5);

fn1();
function fn1() {
  console.log("fn1");
}
const fn2 = () => {
  console.log("fn2");
};
fn2();

function fn3(param1) {
  if (param1 === undefined) {
    console.log("Não tenho variável.");
  } else {
    console.log(param1);
  }
}
fn3();
fn3("DDDDIIIIIIIVVVVVVVV");

const fn4 = (param1 = "Adeus") => {
  console.log(param1);
};
fn4(); // Adeus
fn4("Bom dia"); // Bom dia

(function () {
  document.querySelector("h1").innerHTML = "123123";
  console.log("Fn anon");
})();

setTimeout(fn4, 2000);
setTimeout(() => {
  console.log("Olá");
}, 3000);

window.setInterval(() => {
  console.log("5 segundos");
}, 5000);

function sum(n1, n2) {
  // return é do tipo "number"
  if (typeof n1 != "number") {
    return -1;
  }
  if (typeof n2 != "number") {
    return -1;
  }
  const resultado = n1 + n2;
  return resultado;
}

const result = sum(5, 7);
console.log(`O resultado é: ${result}`);

function retornaString() {
  // Retorna tipo "string"
  return "Nuno";
}
const resultadoNuno = retornaString();
console.log(resultadoNuno);

function retornaVoid(param1) {
  if (typeof param1 == "number") {
    console.log("Tipo number")
    return;
  }
  console.log(param1);
}

retornaVoid(1);
retornaVoid("Hellow ");
